import { useEffect, useState }  from "react"
import { pedirDatos }           from "../../helpers/pedirDatos"
import { ItemList}              from "./../ItemList/ItemList"
import "../ItemListContainer/ItemListContainer.scss"
import { useParams }            from "react-router-dom"


export const ItemListContainer = () => {

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
                {
                    loading
                    ? <h2>Cargando!!!--- {categoriaId}</h2>
                    :
                    <ItemList items={productos} />
                }
            </div>
        )
}