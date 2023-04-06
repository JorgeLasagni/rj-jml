import { BsFillTrashFill }              from 'react-icons/bs'
import { MdOutlineRemoveShoppingCart }  from "react-icons/md";
import { CartContext }                  from "../../context/CartContext"
import { useContext }                   from "react"
import { Link }                         from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



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
    const styles = {
        border: '1px solid rgba(0, 0, 0, 0.05)',
        backgroundColor: 'rgb(170, 236, 226)'
    };
    return (
        <div className='container'>
            <h2>Tu compra ...</h2>
            <hr />
            <div className='container'>
                <div className=' row my-6  justify-content-center'>
                    {           
                        cart.map((prod) => (
                            <div className='col-2 m-1' key={prod.id} style={styles}>
                                <h4> {prod.nombre} </h4>
                                <img src={prod.img125} alt={prod.nombre}/>
                                <p><small>Precio Unitario: ${prod.precio}</small></p>
                                <p><small>Cantidad pedida: {prod.cantidad} </small></p>             
                                <p>Precio Total: ${prod.precio * prod.cantidad} </p>
                                <p><b>{prod.st}</b></p>
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
                </div>
            </div>
            <hr />
            <div className='d-flex justify-content-evenly'>
                <h3> TOTAL: ${totalCompra().toFixed(2)} </h3>
                <button onClick={vaciarCarrito} className="btn btn-danger">
                    Vaciar carrito
                    < MdOutlineRemoveShoppingCart />
                </button>
                <Link className='btn btn-success' to="/checkout"> Terminar mi compra</Link>
            </div>
        </div>
    )
}