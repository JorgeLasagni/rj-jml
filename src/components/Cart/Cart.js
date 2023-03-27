import { BsFillTrashFill }              from 'react-icons/bs'
import { MdOutlineRemoveShoppingCart }  from "react-icons/md";
import { CartContext }                  from "../../context/CartContext"
import { useContext }                   from "react"
import { Link }                         from 'react-router-dom';




export const Cart = () => {
    const { cart, totalCompra, vaciarCarrito,  eliminarDelCarrito } = useContext(CartContext)
    
    //Early Return
    if (cart.length === 0) {
        return (
            <div className='container my-5'>
                <h2>El carrito está vacío ...</h2>
                <hr />
                <Link to="/" className='btn btn-primary'> Comprar </Link>
            </div>
        )
    }

    return (
        <div className='container my-5'>
            <h2>Tu compra ...</h2>
            <hr />
            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h4> {prod.name} </h4>
                        <img src={prod.img125} alt={prod.name}/>
                        <p><small>Precio Unitario: ${prod.precio}</small></p>
                        <p><small>Cantidad: {prod.cantidad} </small></p>             
                        <p>Precio Total: ${prod.precio * prod.cantidad} </p>
                        <button 
                            onClick     =   {() => eliminarDelCarrito(prod.id) } 
                            className   =   "btn btn-danger"
                            > Eliminar! 
                            < BsFillTrashFill />
                        </button>
                        <hr />
                    </div>
                ))
            }
            <h3> TOTAL: ${totalCompra().toFixed(2)} </h3>
            <button onClick={vaciarCarrito} className="btn btn-danger">
                Vaciar carrito
                < MdOutlineRemoveShoppingCart />
            </button>
            <Link className='btn btn-success' to="/checkout"> Terminar mi compra</Link>
        </div>
    )
}