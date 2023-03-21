import { useContext, useState } from "react"
import { LoginContext }         from "../../context/LoginContext"
import "./LoginScreen.scss"
import { BsEyeSlash, BsEye }              from 'react-icons/bs'

export const LoginScreen = () => {

    const { user, tryLogin } = useContext(LoginContext)
    console.log(user)
    const [values, setValues] = useState({
        email:"",
        password:""
    })
    
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        tryLogin(values)
    }

    const [shown, setShown] = useState(false);
    const switchShown = () => setShown(!shown);

    return (
        <div className="login-screen">
            <div onSubmit={handleSubmit} className="login">
                <h2>Login</h2>
                <hr />
                <form>
                    <input 
                        value       =   {values.email}
                        type        =   {"text"} 
                        onChange    =   {handleInputChange}
                        className   =   "form-control"
                        placeholder =   "Tu mail"
                        name        =   "email"
                    />
                    <div className="container my-2">
                    <input 
                        value={values.password}
                        type        =   {shown ? 'text' : "password"} 
                        onChange    =   {handleInputChange}
                        className   =   "form-control my-3"
                        placeholder =   "Contraseña"
                        name        =   "password"
                    />
                    <button className = "btn btn-primary" 
                            onClick   = {switchShown}>
                            {shown ? 'Ocultar' : 'Mostrar'}
                            {/* {shown ? < BsEyeSlash /> : < BsEye />} */}
                    </button>
                  
                    </div>
                    <button className="btn btn-primary" tipe="submit">Login</button>
                </form>
            </div>

        </div>    
    )
}