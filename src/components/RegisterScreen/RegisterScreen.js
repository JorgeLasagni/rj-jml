import "./RegisterScreen.scss"
import { useContext, useState } from "react"
import { LoginContext }         from "../../context/LoginContext"
import { BsEyeSlash, BsEye }    from 'react-icons/bs'
import logods                   from "./logods.jpg"
import { Link }                 from "react-router-dom"

import { collection }           from "firebase/firestore"
import { addDoc }               from "firebase/firestore"
import { db }                   from "../../firebase/config"



export const RegisterScreen = () => {
//-------------------------------------------------------------------------
const [usuarioId, setUsuarioId] = useState(null)
const usuariosRef               = collection(db, 'usuarios')
//-------------------------------------------------------------------------
    const { user, register } = useContext(LoginContext)
    const [values, setValues] = useState({
        email:      "",
        password:   "",
        nombre:     "",
        direccion:  "",
        telefono:   ""
    })
    const generarUsuario = (values) => {
        addDoc(usuariosRef, values)
            .then((doc) => {
            setUsuarioId(doc.id)
        })
    }
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        register(values)
        generarUsuario(values)
    }
    const [shown, setShown] = useState(false);
    const switchShown = () => setShown(!shown);

    // if (usuarioId) {
    //     return (
    //         <div className="container my-5">
    //             <h2>USUARIO registrado exitosamente</h2>
    //             <hr />
    //             <p>Identificación USUARIO: {usuarioId} </p>
    //             <Link className="btn btn-primary my-3" to="/*">Al inicio</Link>
    //         </div>
    //     )
    // } 

    return (
        <div className = "register-screen">
            <div className = "container register">
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
                    
                    <div  className="container my-2 password-button">
                        <button className="btn btn-primary" tipe="submit">Registrar</button>
                        <Link to="/login">Ingresar</Link>
                    </div>
                </form>
            </div>
        </div>    
    )
}