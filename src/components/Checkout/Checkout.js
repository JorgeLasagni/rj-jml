import { useContext, useState }     from "react"
import { Navigate }                 from "react-router-dom"
import { Link }                     from "react-router-dom"
import { CartContext }              from "../../context/CartContext"
import { db }                       from "../../firebase/config"
import { collection, addDoc }       from "firebase/firestore"
import { doc, updateDoc, getDoc }   from "firebase/firestore"

export const Checkout = () => {

    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

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

        //console.log("Submit", orden)

        const productosRef = collection(db,'productos')
        cart.forEach((item) => {
            const docRef = doc(productosRef, item.id)

            getDoc(docRef)
                .then((doc) => {
                    if (doc.data().stock >= item.cantidad) {
                        updateDoc(docRef, {
                            stock: item.stock - item.cantidad
                        })
                    } else {
                        alert("no hay stock de " + item.nombre)
                    }
                })
        });
        const ordenesRef = collection(db, 'ordenes')
        addDoc(ordenesRef, orden)
            //.then((doc) => console.log(doc.id))
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })  
            
            //1.- verificar el stock disponible de toda la compra
            //2.- si está ok (si hay de todo) actualizo stock y genero la OC
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Orden registrada exitosamente</h2>
                <hr />
                <p>No olvides tu número de orden: {orderId} </p>
                <Link className="btn btn-primary my-3" to="/*">Al inicio</Link>
            </div>
        )
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