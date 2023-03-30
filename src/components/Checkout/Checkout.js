// import { useContext, useState } from "react"
// export const Checkout = () => {
//     const [values, setValues] = useState({
//         nombre:     '',
//         direccion:  '',
//         email:      ''
//     })

//     const handleInputChange = (e) => {
//         //console.log(e.target.name)
//                 setValues({
//                      ...values,
//                     [e.target.name]: e.target.value
//                 })
//             }

//     const handleSubmit = (e) => {
//                 e.preventDefault()
//             console.log("Submit",values)               }

//     return (
//         <div className="container my-5">
//             <h2>CheckOut</h2>
//             <hr />

//             <form onSubmit={handleSubmit}>
//                 <input 
//                     onChange    ={handleInputChange}
//                     value       ={values.nombre}
//                     type        ={'text'}
//                     placeholder ='tu nombre'
//                     className   ="form-control my-2"
//                     name        ="nombre"
//                 />
//                 <input 
//                     onChange    ={handleInputChange}
//                     value       ={values.direccion}
//                     type        ={'text'}
//                     placeholder ='tu dirección'
//                     className   ="form-control my-2"
//                     name        ="direccion"
//                 />
//                 <input
//                     onChange    ={handleInputChange}
//                     value       ={values.email}
//                     type        ={'email'}
//                     placeholder ='tu email'
//                     className   ="form-control my-2"
//                     name        ="email"
//                 />

//                 <button className="btn btn-primary" type="submit">Enviar Datos</button>
//             </form>

//         </div>
//     )
// }

import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


export const Checkout = () => {

    const { cart, totalCompra } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // validaciones
        if (values.nombre.length < 3) {
            alert("Nombre inválido")
            return
        }
        if (values.direccion.length < 3) {
            alert("Direccion inválida")
            return
        }
        if (values.email.length < 5) {
            alert("Email inválido")
            return
        }

        const orden = {
            cliente: values,
            items: cart.map((prod) => ({id: prod.id, precio: prod.precio, cantidad: prod.cantidad, nombre: prod.nombre})),
            total: totalCompra(),
            fecha: new Date()
        }

        console.log("Submit", orden)
    }
    // Para no ingresar al Checkout! 
    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container my-5">
            <h2>CheckOut</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <input required
                    onChange={handleInputChange}
                    value={values.nombre}
                    type="text"
                    placeholder='Ingrese su Nombre'
                    className="form-control my-2"
                    name="nombre"
                />
                <input required
                    onChange={handleInputChange}
                    value={values.direccion}
                    type='text'
                    placeholder='Direccion'
                    className="form-control my-2"
                    name="direccion"
                />
                <input required
                    onChange={handleInputChange}
                    value={values.email}
                    type='email'
                    placeholder='Tu E-Mail'
                    className="form-control my-2"
                    name="email"
                />
                <button className="btn btn-primary" type="submit">Enviar Datos</button>
            </form>
        </div>
    )
}