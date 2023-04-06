import "./RegisterScreen.scss"
import { useState }             from "react"
import { useContext }           from "react"
import { LoginContext }         from "../../context/LoginContext"
import { BsEyeSlash, BsEye }    from 'react-icons/bs'
import logods                   from "./logods.jpg"
import { Link }                 from "react-router-dom"

import { collection }           from "firebase/firestore"
import { addDoc }               from "firebase/firestore"
import { db }                   from "../../firebase/config"

import { Formik }               from "formik"
import * as Yup                 from 'yup';

const schema = Yup.object().shape({
    password: Yup.string()
                .required('Obligatorio!')
                .min(3,"Mínimo 3 caracteres!")
                .max(31, "Máximo de 30 caracteres"),
    email:      Yup.string()
                .required('Obligatorio!')
                .email("EMail inválido!")
    })

export const RegisterScreen = () => {

    const [usuarioId, setUsuarioId] = useState(null)
    const usuariosRef               = collection(db, 'usuarios')
    const { register }              = useContext(LoginContext)
    
    const [values, setValues] = useState({
        email:      "",
        password:   ""
    })
    const generarUsuario = (values) => {
        addDoc(usuariosRef, values)
            .then((doc) => {
            setUsuarioId(doc.id)
        })
    }
    const cargaCambios = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    const registracion = async (values) => {
        register(values)
        generarUsuario(values)
    }

    const [shown, setShown] = useState(false);
    const switchShown = () => setShown(!shown);

    if (usuarioId) {
            return (
                <div className="container my-5">
                    <h2>USUARIO no puede registrarse, ya existe! como {usuarioId}</h2>
                    <Link className="btn btn-primary my-3" to="/*">Vuelva a intentarlo!</Link>
                </div>
            )
        } 

    return (
        <div className = "register-screen">
            <div className = "container register">
                <img src={logods} alt="DoggyStyle"/>
                <Formik
                    initialValues={{
                        password:     '',
                        email:      ''
                    }}
                    validationSchema    = { schema }
                    onSubmit            = { registracion }
                    onChange            = { cargaCambios }
                >
                {({values, errors, handleChange, handleSubmit, isSubmitting}) => (
                    <form onSubmit={handleSubmit}>
                        <input required
                            onChange={handleChange}
                            value={values.email}
                            type='email'
                            placeholder='E-Mail'
                            className="form-control my-2"
                            name="email"
                        />
                        {errors.email && <p className="alert alert-danger">{errors.email}</p>}
                        <div className="container my-2 register-password-button">
                            <input required
                                onChange    = {handleChange}
                                value       = {values.password}
                                type        = {shown ? 'text' : "password"}
                                placeholder = 'Ingrese su Contraseña'
                                className   = "form-control my-2"
                                name        = "password"
                            />
                            <button className   = "btn btn-primary" 
                                    type        ="button"
                                    onClick     = {switchShown}>
                                    {shown ? < BsEyeSlash /> : < BsEye />}
                            </button>
                        </div> 
                        {errors.password && <p className="alert alert-danger">{errors.password}</p>} 
                        <button 
                            className="btn btn-primary" 
                            type="submit"
                            disabled={isSubmitting}>
                                Registrarse
                        </button>
                        <Link to="/login">Ingresar</Link>
                    </form>
                )}
                </Formik>           
            </div>
        </div>    
    )
}