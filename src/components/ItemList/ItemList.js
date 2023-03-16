import { useContext }   from "react"
import { Item }         from "../Item/Item"
import { MyContext }    from "../Context/MyContext"

export const ItemList = ( {items}  ) => {
    const {tutor} = useContext(MyContext)
    console.log(tutor)
    return (
        <div className="container justify-content-center">
            <hr />            
            <div className="row my-5" >
                { items.map( (producto) => <Item key={producto.id}  item={producto} /> )}
            </div>
        </div>
    )
} 