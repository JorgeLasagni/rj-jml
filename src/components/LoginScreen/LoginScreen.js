import "./LoginScreen.scss"
import { useContext, useState } from "react"
import { LoginContext }         from "../../context/LoginContext"
import { BsEyeSlash, BsEye }    from 'react-icons/bs'
import logods                   from "./logods.jpg"
import { Link }                 from "react-router-dom"

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
export const LoginScreen = () => {

    const {user, login, googleLogin } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const cargaCambios = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const ingreso = (values) => {
        login(values)
    }
    const [shown, setShown] = useState(false);
    const switchShown = () => setShown(!shown);

    return (
        <div className = "login-screen"> 
            <div className = "container login">
                <img src={logods} alt="DoggyStyle"/>
                <Formik
                    initialValues={{
                        password:   '',
                        email:      ''
                    }}
                    validationSchema    = { schema }
                    onSubmit            = { ingreso }
                    onChange            = { cargaCambios }
                >
                {({values, errors, handleChange, handleSubmit, isSubmitting}) => (
                    <div>
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
                        <div className="container my-2 login-password-button">
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
                                Ingresar
                        </button>
                        
                        <Link to="/register">Registrarse</Link>
                        {(user.errorIngreso) && <p className="login-error">{(user.errorIngreso) && "ERROR DE INGRESO"}</p>}
                    </form>
                    </div>
                )}
                </Formik>
                <button className='btn btn-outline-primary'
                    onClick={googleLogin}>Ingreso con Google
                </button>
            </div>
        </div>   
    )
}