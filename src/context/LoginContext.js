import {createContext, useState } from "react"

export const LoginContext = createContext()

const MOCK_USERS = [
    {
        id: 1,
        email: "jlasagni@gmail.com",
        password: "Miramar"
    },
    {
        id: 2,
        email: "jml.sistemas.srl@gmail.com",
        password: "Miramar23y18"
    }
]
export const LoginProvider = ({children}) => {

    const [user, setUser] = useState({
        email:null,
        logged:false
    })

    const tryLogin = (values) => {
        const match = MOCK_USERS.find((user) => user.email === values.email)
        if (match && match.password === values.password) {
            setUser({
                logged: true,
                email: match.email
            })
        }
    }

    const logout = () => {
        setUser({
            email: null,
            logged: false
        })
    }

    return (
        <LoginContext.Provider value={{
            user,
            tryLogin,
            logout
        }}>
            {children}
        </LoginContext.Provider>
    )
}
