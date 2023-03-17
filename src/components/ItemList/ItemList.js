import { Item } from "../Item/Item"

export const ItemList = ( {items}  ) => {

    return (
        <div className="container justify-content-center">
            <hr />            
            <div className="row my-5" >
                { items.map( (producto) => <Item key={producto.id}  item={producto} /> )}
            </div>
        </div>
    )
} 