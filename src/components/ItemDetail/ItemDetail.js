import { useNavigate } from "react-router-dom"
import { ItemCount }   from "./../ItemCount/ItemCount"
export const ItemDetail = ({item}) => {
    
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }
    const onAdd = (loQueAgrego) => {
        alert(`Agregaste ${loQueAgrego} productos`);
    };
    
    return (
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.img500} alt={item.nombre} />
            <p>{item.descripcion}   ({item.categoria})</p>
            <p>Precio: ${item.precio} (Stock: {item.stock} unidades) </p>

            <ItemCount onAdd={onAdd} initial={1} stock={item.stock} />

            <button onClick={handleVolver} className="btn btn-primary">Volver</button>
        </div>
    )
}