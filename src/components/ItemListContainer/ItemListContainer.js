import { useContext, useEffect, useState }  from "react"
import { pedirDatos }                       from "../../helpers/pedirDatos"
import { ItemList}                          from "./../ItemList/ItemList"
import { useParams }                        from "react-router-dom"
import { MyContext }                        from "../Context/MyContext"
import "../ItemListContainer/ItemListContainer.scss"

export const ItemListContainer = () => {

    const {profesor} = useContext(MyContext)
    console.log(profesor)

    const [productos, setProductos] = useState([]) 
    const [loading, setLoading]     = useState(true) 

    const { categoriaId }           = useParams()

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then( (response) => {
                if (!categoriaId) {
                    setProductos( response )
                } else {
                    setProductos( response.filter((prod) => prod.categoria === categoriaId) )
                }
            })
            .catch( (reject) => {
                console.log(reject)
            })
            .finally( () => {
                setLoading(false)
            })  
        }, [categoriaId] )

        return (
            <div className="container">
                <h5>Categoría: {categoriaId}</h5>
                {
                    loading
                    ? <h4>Cargando ... {categoriaId}</h4>
                    :
                    <ItemList items={productos}/>
                }
            </div>
        )
}