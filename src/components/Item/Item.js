import { Link } from "react-router-dom"

export const Item = ( {item} ) => {

    return (
        <div className='col-3 m-1'>
            <img src={item.img125} alt={item.nombre}/>
            <h4>{item.nombre}</h4>
            <p>{item.descripcion}</p>
            <p>Precio: <strong>${item.precio}</strong></p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
}
