import { Link, useNavigate }    from "react-router-dom"
import { useContext, useState } from "react"
import { ItemCount }            from "./../ItemCount/ItemCount"
import { CartContext }          from "../../context/CartContext"
import { LowStockMsg}           from "./../LowStockMsg/LowStockMsg"

export const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
        
    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }
        agregarAlCarrito(newItem)
    }

    return (
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.img125} alt={item.nombre} />
            <p>{item.descripcion}   ({item.categoria})</p>
            <p>Precio: ${item.precio} </p>
            
            {item.stock  >  5 && <p>Stock disponible: {item.stock} unidades</p>}
            {item.stock  <= 5 && <LowStockMsg stock={item.stock} />}

            {
                isInCart(item.id)
                    ? <Link to="/cart" className="btn btn-success my-2">Terminar mi Compra! </Link>
                    :   <ItemCount
                            max             = {item.stock}
                            cantidad        = {cantidad}
                            setCantidad     = {setCantidad}
                            handleAgregar   = {handleAgregar} 
                        />
            }   
            <br />
            <button onClick={handleVolver} className="btn btn-primary">Volver</button>            
        </div>
    )
}

// export const ItemDetail = ({item}) => {
    
//     const navigate = useNavigate()
//     const handleVolver = () => {
//         navigate(-1)
//     }
//     const onAdd = (loQueAgrego) => {
//         const newItem = {
//             ...item,
//             loQueAgrego
//         }
//         alert(`Hola!!! agregaste ${loQueAgrego} unidades de ` + item.nombre);
//         console.log({newItem})
//     };

//     return (
//         <div className="container col-3 ">
//             <h4>{item.nombre}</h4>
//             <img src={item.img125} alt={item.nombre} />
//             <p>{item.descripcion}   ({item.categoria})</p>
//             <p>Precio: ${item.precio} (Stock: {item.stock} unidades) </p>
//             <ItemCount onAdd={onAdd} initial={1} stock={item.stock} />
//             <hr />
//             <button onClick={handleVolver} className="btn btn-primary">Volver</button>            
//         </div>
//     )
// }