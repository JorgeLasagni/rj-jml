import React        from 'react';
import { useState } from 'react';

//import './styles/ItemCount.css';

export const ItemCount = ({ onAdd, initial, stock }) => {
    
    const [ctrlStock, setCtrlStock] = useState(stock-initial);

    const [loQueAgrego, setLoQueAgrego] = useState(initial);

    const addProduct = (num) => {
    setLoQueAgrego(loQueAgrego + num);
    setCtrlStock(ctrlStock-num);
    };
    

    //const actualizoCtrlStock = (numero) => {
    //setCtrlStock(stock - cantidad)
    //}

    return (
    <div className="count-container">
        <p> (Stock Restante: {ctrlStock} unidades) </p>

        <div className="count-container__contador">
            <button className="count-container__button"
                onClick={() => addProduct(-1)}
                disabled={loQueAgrego === initial}>
                -
            </button>
            <span className="count-container__qty">{loQueAgrego}</span>
            <button className="count-container__button"
                onClick={() => addProduct(+1)}
                disabled={loQueAgrego === stock}>
                +
            </button>
        </div>

        <button
        className="button-primary"
        onClick={() => {
            onAdd(loQueAgrego);
        }}
        disabled={stock === 0 ? true : null} >
            Añadir
        </button>
    </div>
    );
};

//export default ItemCount;

//---------------------------------------------------------------------*
// import { useState } from "react";
// //export const ItemCount = ( prop ) => {

//  export const ItemCount = ( props ) => {
//     const {stock} = props    
//     console.log(stock)
//     // //funcion que suma a stock
//     // const sumoProductos = (numero) => {
//     //     setCantidad(cantidad + numero);
//     // };
//     // //función que resta de stock
//     // const restoProductos = (numero) => {
//     //     setCantidad(cantidad - numero);
//     // }
//     const [cantidad, setCantidad] = useState(1);

//     const actualizoProductos = (numero) => {
        
//         setCantidad(cantidad + numero)
//     }

//     const [carrito, setCarrito] = useState(0);
//     const actualizoCarrito = (numero) => {
//         setCarrito(carrito + cantidad)
//         actualizoCtrlStock(carrito)
//     }

//     const [ctrlStock, setCtrlStock] = useState(stock);
//     const actualizoCtrlStock = (numero) => {
//         setCtrlStock(stock - cantidad)
//     }

//     return (
//         <div>
            
//             <p> Stock: {ctrlStock} </p>
//             <button className="btn btn-danger" onClick={() => actualizoProductos(+1)} >  +  </button>
//             <hr />
//             <p> {cantidad} </p>
//             <hr />
//             <button className="btn btn-success" onClick={() => actualizoProductos(-1)}>  -  </button>
//             <hr />
//             <button className="btn btn-warning" onClick={() => actualizoCarrito(cantidad)}> Agregar al Carrito: {carrito} </button>
//             <hr />

//         </div>
//     )
// }