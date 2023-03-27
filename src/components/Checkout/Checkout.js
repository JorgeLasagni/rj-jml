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
            [e.target.nombre]: e.target.value
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
            alert("Direccion inválido")
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

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>CheckOut</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleInputChange}
                    value={values.nombre}
                    type={'text'}
                    placeholder='Tu nombre'
                    className="form-control my-2"
                    name="nombre"
                />
                <input 
                    onChange={handleInputChange}
                    value={values.direccion}
                    type={'text'}
                    placeholder='Direccion'
                    className="form-control my-2"
                    name="direccion"
                />
                <input 
                    onChange={handleInputChange}
                    value={values.email}
                    type={'email'}
                    placeholder='Tu Email'
                    className="form-control my-2"
                    name="email"
                />
                <button className="btn btn-primary" type="submit">Enviar Datos</button>
            </form>
        </div>
    )
}