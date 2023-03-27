import { createUserWithEmailAndPassword, onAuthStateChanged }   from "firebase/auth";
import { signOut, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState }                   from "react";
import { auth, provider }                                       from "../firebase/config";

export const LoginContext = createContext()


export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: false,
        uid: null
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
                console.log(err)
                alert("Error de Ingreso!!! -> "+err)
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
                    email: null,
                    logged: false,
                    uid: null
                })
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                setUser({
                    email: user.email,
                    logged: true,
                    uid: user.uid
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

// export const LoginContext = createContext()

// // const MOCK_USERS = [
// //     {
// //         id: 1,
// //         email: "jlasagni@gmail.com",
// //         password: "Miramar",
// //         usuario: "Jorge Mario Lasagni"
// //     },
// //     {
// //         id: 2,
// //         email: "jml.sistemas.srl@gmail.com",
// //         password: "Miramar23y18",
// //         usuario: "JML Sistemas"
// //     }
// // ]
// export const LoginProvider = ({children}) => {

//     // const [user, setUser] = useState({
//     //     email:   null,
//     //     logged:  false,
//     //     usuario: null
//     // })
//     const [user, setUser] = useState({
//         email:   null,
//         logged:  false,
//     })

// const register = (values) => {
//     createUserWithEmailAndPassword(auth, values.email, values.password)
//         .then((userCredential) => {
//             console.log(userCredential)
//         })
// }

//     // const tryLogin = (values) => {
//     //     const match = MOCK_USERS.find((user) => user.email === values.email)
//     //     if (match && match.password === values.password) {
//     //         setUser({
//     //             logged: true,
//     //             email: match.email,
//     //             usuario: match.usuario
//     //         })
//     //     } else{
//     //         alert("Error en Usuario o Contraseña!!!")
//     //     }
//     // }

//     // const logout = () => {
//     //     setUser({
//     //         email: null,
//     //         logged: false,
//     //         usuario:null
//     //     })
//     // }

//     return (
//         // <LoginContext.Provider value={{
//         //     user,
//         //     tryLogin,
//         //     logout
//         // }}>
//         <LoginContext.Provider value={{
//             user,
//             register
//         }}>
//             {children}
//         </LoginContext.Provider>
//     )
// }