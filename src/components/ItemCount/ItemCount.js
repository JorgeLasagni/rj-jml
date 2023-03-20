export const ItemCount = ({max, cantidad, setCantidad, handleAgregar}) => {
    
    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    
    return (
        <div className="my-3">
            <button
                onClick     = {handleRestar}
                className   = {`btn  ${cantidad===1 ? "btn-outline-danger" : "btn-outline-primary" }`}
                disabled    = {cantidad === 1}
            >
                -
            </button>

            <span className="mx-2">{cantidad}</span>

            <button 
                onClick     = {handleSumar} 
                className   = {`btn ${cantidad===max ? "btn-outline-danger" : "btn-outline-primary" }`}
                disabled    = {cantidad === max}
            >
                +
            </button>
            <br/>
            <button onClick={handleAgregar} className="btn btn-success my-2">Agregar al carrito</button>
        </div>
    );
};

// import React        from 'react';
// import { useState } from 'react';

// export const ItemCount = ({ onAdd, initial, stock }) => {
    
//     const [ctrlStock, setCtrlStock] = useState(stock-initial);
//     const [loQueAgrego, setLoQueAgrego] = useState(initial);
//     const addProduct = (num) => {
//         setLoQueAgrego(loQueAgrego + num);
//         setCtrlStock(ctrlStock - num);
//     };
    
//     return (
//         <div className="count-container">
//             <p> (Stock Restante: {ctrlStock} unidades) </p>
//             <div className="count-container__contador">
//                 <button className="count-container__button"
//                     onClick={() => addProduct(-1)}
//                     disabled={loQueAgrego === initial}>
//                     -
//                 </button>
//                 <span className="count-container__qty">{loQueAgrego}</span>
//                 <button className="count-container__button"
//                     onClick={() => addProduct(+1)}
//                     disabled={loQueAgrego === stock}>
//                     +
//                 </button>
//             </div>
//             <button className="button-primary" 
//                 onClick={() => {
//                     onAdd(loQueAgrego);
//                 }}
//                 disabled={stock === 0 ? true : null} >
//                     Añadir
//             </button>
//         </div>
//     );
// };