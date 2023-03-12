import React        from 'react';
import { useState } from 'react';

export const ItemCount = ({ onAdd, initial, stock }) => {
    
    const [ctrlStock, setCtrlStock] = useState(stock-initial);
    const [loQueAgrego, setLoQueAgrego] = useState(initial);
    const addProduct = (num) => {
        setLoQueAgrego(loQueAgrego + num);
        setCtrlStock(ctrlStock - num);
    };
    
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
            <button className="button-primary" 
                onClick={() => {
                    onAdd(loQueAgrego);
                }}
                disabled={stock === 0 ? true : null} >
                    Añadir
            </button>
        </div>
    );
};