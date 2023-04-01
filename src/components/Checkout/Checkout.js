import { useContext, useState }         from "react"
import { Navigate }                     from "react-router-dom"
import { Link }                         from "react-router-dom"
import { CartContext }                  from "../../context/CartContext"
import { db }                           from "../../firebase/config"
import { collection }                   from "firebase/firestore"
import { addDoc, documentId, getDocs }  from "firebase/firestore"
import { writeBatch, query, where }     from "firebase/firestore"
import { Formik }                       from "formik"
import * as Yup                         from 'yup';


const schema = Yup.object().shape({
    nombre: Yup.string()
                .required('Campo obligatorio!')
                .min(3,"Mínimo 3 caracteres!")
                .max(31, "Máximo de 30 caracteres"),
    direccion: Yup.string()
                .required('Campo obligatorio!')
                .min(6,"Mínimo 6 caracteres!")
                .max(31, "Máximo de 30 caracteres"),
    email:      Yup.string()
                .required('Campo obligatorio!')
                .email("EMail inválido!")
    })
export const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito }  = useContext(CartContext)
    const [orderId, setOrderId]                 = useState(null)
    const [sinStock, setSinStock]               = useState(0)

    const generarOrden = async (values) => {
        const orden = {
            cliente: values,
            items: cart.map((prod) => ({id: prod.id, 
                                        precio: prod.precio, 
                                        cantidad: prod.cantidad, 
                                        nombre: prod.nombre})),
            total: totalCompra(),
            fecha: new Date()
        }
        const batch         = writeBatch(db)        
        const ordenesRef    = collection(db, 'ordenes')
        const productosRef  = collection(db,'productos')
        const outOfStock    = []
        const itemsRef      = query(productosRef, where(documentId(), 'in', cart.map(prod=> prod.id)))
        const response      = await getDocs(itemsRef)
        response.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id)
            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
                item.st = ""
            } else {
                outOfStock.push(item)
                item.st = "Atención: Sin Stock suficiente!!! quedan: "+doc.data().stock+" u. disponibles!"
            }
        })
        if (outOfStock.length === 0) {
            await batch.commit()
            addDoc(ordenesRef, orden)
                .then((doc) => {
                    setOrderId(doc.id)
                    vaciarCarrito()
                })
        } else {
            setSinStock(outOfStock.length)
        }
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

    if (sinStock > 0) {
        return (
            <div className="container my-5">
                <h2>Atención, hay Items sin Stock Disponible... Debe corregir!</h2>
                <hr />
                <Link className="btn btn-primary my-3" to="/cart">Al Carrito de Compras!!!</Link>
            </div>
        )
    }

    // Para no ingresar al Checkout!
    if (cart.length === 0) {
        return <Navigate to="/" />
    } 

    return (
        <div className="container my-5">
            <h2>¡CheckOut!</h2>
            <hr />
            <Formik
                initialValues={{
                    nombre:     '',
                    direccion:  '',
                    email:      ''
                }}
                validationSchema={schema}
                onSubmit={ generarOrden }
            >
                {({values, errors, handleChange, handleSubmit, isSubmitting}) => (
                    <form onSubmit={handleSubmit}>
                        <input required
                            onChange={handleChange}
                            value={values.nombre}
                            type="text"
                            placeholder='Ingrese su Nombre'
                            className="form-control my-2"
                            name="nombre"
                        />
                        {errors.nombre && <p className="alert alert-danger">{errors.nombre}</p>}
                        <input required
                            onChange={handleChange}
                            value={values.direccion}
                            type='text'
                            placeholder='Direccion'
                            className="form-control my-2"
                            name="direccion"
                        />
                        {errors.direccion && <p className="alert alert-danger">{errors.direccion}</p>}                        
                        <input required
                            onChange={handleChange}
                            value={values.email}
                            type='email'
                            placeholder='Tu E-Mail'
                            className="form-control my-2"
                            name="email"
                        />
                        {errors.email && <p className="alert alert-danger">{errors.email}</p>}
                        <button 
                            className="btn btn-primary" 
                            type="submit"
                            disabled={isSubmitting}>
                                Enviar Datos
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}