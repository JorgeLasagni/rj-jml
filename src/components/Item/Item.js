import { Link } from "react-router-dom"

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
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
}
