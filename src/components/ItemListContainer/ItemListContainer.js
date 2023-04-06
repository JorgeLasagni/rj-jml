import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState }  from "react"
import { ItemList}              from "./../ItemList/ItemList"
import { useParams }            from "react-router-dom"
import { collection, getDocs, query, where, limit } from "firebase/firestore"
import { db }                   from "../../firebase/config"
import {Spinner}                from "reactstrap"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]) 
    const [loading, setLoading]     = useState(true)     


    const { categoriaId }           = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoriaId 
                    ? query(productosRef, where("categoria", "==", categoriaId), limit(100))
                    //? query(productosRef, where("categoria", "==", categoriaId), where("precio", "<", 5000))
                    : productosRef
        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {...doc.data(),id: doc.id}
                })
                setProductos(docs)
            })
            .finally(() => {
                setLoading(false)
                })   
        }, [categoriaId] )
        
        return (
            <div className="container">
                {   loading
                        ? <div> <Spinner color="danger"/>  </div>
                        :
                        <div>
                            <h5>
                                {
                                    (!categoriaId)
                                    ?   `Todas las Categorías!`
                                    :   `Categoría: ${categoriaId}`
                                }
                            </h5>
                            <ItemList items={productos}/>
                        </div>
                }
            </div>
        )
}