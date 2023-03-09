import { Item } from "../Item/Item"
export const ItemList = ( {items}  ) => {

    //const {{items}, categoria} = props 
    //console.log(props)
    return (
        <div className="contenedor">
            <h2> Son mis productos DoggyStyle!</h2>
            <hr />            
            <div className="row my-5">
                { items.map( (producto) => <Item key={producto.id}  item={producto} /> )}
            </div>
        </div>
    )
} 