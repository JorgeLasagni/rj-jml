//import { useState, useEffect } from "react";
import { useState } from "react";

export const ItemCount = ( props ) => {
    
    const {stock, articulo, imagen} = props    
    
    // //funcion que suma a stock
    // const sumoProductos = (numero) => {
    //     setCantidad(cantidad + numero);
    // };
    // //función que resta de stock
    // const restoProductos = (numero) => {
    //     setCantidad(cantidad - numero);
    // }
    const [cantidad, setCantidad] = useState(1);
    const actualizoProductos = (numero) => {
        setCantidad(cantidad + numero)
    }
    const [carrito, setCarrito] = useState(0);
    const actualizoCarrito = (numero) => {
        setCarrito(carrito + cantidad)
        actualizoCtrlStock(carrito)
    }
    const [ctrlStock, setCtrlStock] = useState(stock);
    const actualizoCtrlStock = (numero) => {
        setCtrlStock(stock - cantidad)
    }

    return (
        <div>
            {/* <p>Artículo: {articulo} <img src={imagen} alt="" /> Stock: {stock} </p> */}
            <p>Artículo: {articulo} <img src={imagen} alt="" /> Stock: {ctrlStock} </p>
            <button className="btn btn-danger" onClick={() => actualizoProductos(+1)} >  +  </button>
            <p> {cantidad} </p>
            <button className="btn btn-success" onClick={() => actualizoProductos(-1)}>  -  </button>
            <button className="btn btn-warning" onClick={() => actualizoCarrito(cantidad)}> Agregar al Carrito: {carrito} </button>
        </div>
    )
}