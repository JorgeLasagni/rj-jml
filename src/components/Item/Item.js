import { Link }         from "react-router-dom"
import { LowStockMsg}   from "./../LowStockMsg/LowStockMsg"

export const Item = ( {item} ) => {
    const styles = {
        border: '1px solid rgba(0, 0, 0, 0.05)',
        backgroundColor: 'rgb(170, 236, 226)'
    };

    return (
        <div className='col-2 m-1' style={styles}>
            <img src={item.img125} alt={item.nombre}/>
            <h4>{item.nombre}</h4>
            <p>{item.descripcion}</p>
            <p>Precio: <strong>${item.precio}</strong></p>
            
            {item.stock  >  5 && <p>Stock disponible: {item.stock} unidades</p>}
            {item.stock  <= 5 && <LowStockMsg stock={item.stock} />}

            {item.stock > 0 && 
                <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
            }


            {/* // { item.stock  > 5 && <p>Stock disponible: {item.stock}</p>}
            // { item.stock <= 5 && item.stock > 0 && <p><b>Quedan sólo {item.stock} {item.stock === 1 ? "unidad" : "unidades" }!!!</b></p> }
            // <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>} */}
            
        </div>
    )
}
// {/* Está OK! {item.stock === 0
//                 ? <p><b>Stock Agotado!!!</b></p>
//                 : <p>Stock: {item.stock} 
//                 { item.stock === 1 
//                 ? ' Unidad'
//                 : ' Unidades'}</p>} */}