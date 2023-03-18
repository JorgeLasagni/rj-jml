import "../ItemListContainer/ItemListContainer.scss"
import { useEffect, useState }  from "react"
import { pedirDatos }           from "../../helpers/pedirDatos"
import { ItemList}              from "./../ItemList/ItemList"
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

        // Early Return...
        // if (loading) {
        //     return (
        //         <div className="container">
        //             <h5>Categoría: {categoriaId} ... Cargando ...</h5>
        //         </div>
        //     )
        // }

        return (
            <div className="container">
                
                {
                    loading
                        ?  <h5>Categoría: {categoriaId} ... Cargando ...</h5>
                        :
                        <div> <h5>Categoría: {categoriaId}</h5>
                        <ItemList items={productos}/> </div>
                }
            </div>
        )
}