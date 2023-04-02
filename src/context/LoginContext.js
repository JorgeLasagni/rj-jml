import { createUserWithEmailAndPassword, onAuthStateChanged }   from "firebase/auth";
import { signOut, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState }                   from "react";
import { auth, provider }                                       from "../firebase/config";

export const LoginContext = createContext()


export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email:  null,
        logged: false,
        uid:    null,
        errorIngreso: false
    })

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
            })
    }

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .catch((err) => {
                setUser({errorIngreso: true})
                })     
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .catch((err) => console.log(err.message))
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({
                    email:  null,
                    logged: false,
                    uid:    null,
                    errorIngreso: false
                })
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email:  user.email,
                    logged: true,
                    uid:    user.uid,
                    errorIngreso: false
                })
            } else {
                logout()
            }
        })
    }, [])

    return (
        <LoginContext.Provider value={{
            user,
            register,
            login,
            logout,
            googleLogin
        }}>
            {children}
        </LoginContext.Provider>
    )
}