//import  'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from "react"
import { LoginContext }         from "../../context/LoginContext"
import "./LoginScreen.scss"
import { BsEyeSlash, BsEye }    from 'react-icons/bs'
import logods                   from "./logods.jpg"


export const LoginScreen = () => {

    const { user, tryLogin } = useContext(LoginContext)
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        tryLogin(values)
    }

    const [shown, setShown] = useState(false);
    const switchShown = () => setShown(!shown);

    return (
        <div className = "login-screen">
            <div className = "container login">
                <img src={logods} alt="DoggyStyle"/>
            
                <form onSubmit = {handleSubmit}>
                    <input 
                        value       =   {values.email}
                        type        =   {"text"} 
                        onChange    =   {handleInputChange}
                        className   =   "form-control"
                        placeholder =   "Ingrese su Correo Electrónico"
                        name        =   "email"
                    />
                    <div className="container my-2 password-button">
                        <input 
                            value       =   {values.password}
                            type        =   {shown ? 'text' : "password"} 
                            onChange    =   {handleInputChange}
                            className   =   "form-control my-3"
                            placeholder =   "Ingrese Contraseña"
                            name        =   "password"
                        />
                        
                        <button className   = "btn btn-primary" 
                                type        ="button"
                                onClick     = {switchShown}>
                                {shown ? < BsEyeSlash /> : < BsEye />}
                        </button>
                    </div>
                    <div  className="container my-2 password-button">
                    <button className="btn btn-primary" tipe="submit">Login</button>
                    </div>
                </form>
            </div>

        </div>    
    )
}