import "./RegisterScreen.scss"
import { useContext, useState } from "react"
import { LoginContext }         from "../../context/LoginContext"
import { BsEyeSlash, BsEye }    from 'react-icons/bs'
import logods                   from "./logods.jpg"
import { Link }                 from "react-router-dom"



export const RegisterScreen = () => {

    const { user, register } = useContext(LoginContext)
    const [values, setValues] = useState({
        email:      "",
        password:   "",
        nombre:     "",
        direccion:  "",
        telefono:   ""
    })
    //para sacar el error
    console.log(user)

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)
        alert("Listo el alta???")
    }

    const [shown, setShown] = useState(false);
    const switchShown = () => setShown(!shown);

    return (
        <div className = "register-screen">
            <div className = "container register">
                <h5>Regístrese en DoggyStyle</h5>
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
                    <div className="container my-2 register-password-button">
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
                    <div>
                        <input 
                            value       =   {values.nombre}
                            type        =   {"text"} 
                            onChange    =   {handleInputChange}
                            className   =   "form-control"
                            placeholder =   "Ingrese su nombre y apellido"
                            name        =   "nombre"
                        />
                    </div>
                    <div>
                    <input 
                            value       =   {values.direccion}
                            type        =   {"text"} 
                            onChange    =   {handleInputChange}
                            className   =   "form-control"
                            placeholder =   "Ingrese su dirección"
                            name        =   "direccion"
                        />
                    </div>
                    <div>
                    <input 
                            value       =   {values.telefono}
                            type        =   {"text"} 
                            onChange    =   {handleInputChange}
                            className   =   "form-control"
                            placeholder =   "Ingrese su teléfono"
                            name        =   "telefono"
                        />
                    </div>
                    <div  className="container my-2 password-button">
                        <button className="btn btn-primary" tipe="submit">Nuevo!</button>
                        <Link to="/login">Para Ingresar</Link>
                    </div>
                </form>
            </div>
        </div>    
    )
}