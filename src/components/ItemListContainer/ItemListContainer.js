import "../ItemListContainer/ItemListContainer.scss"
import { useEffect, useState }  from "react"
import { ItemList}              from "./../ItemList/ItemList"
import { useParams }            from "react-router-dom"
import { collection, getDocs, query, where, limit } from "firebase/firestore"
import { db }                   from "../../firebase/config"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from "reactstrap"
//import { RingLoader } from "react-spinners"
//react-spinners

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]) 
    const [loading, setLoading]     = useState(true)     


    const { categoriaId }           = useParams()

    useEffect(() => {
        setLoading(true)

        //1- referencia (sincrónico) qué basede datos quiero y cuál coleción de ella?
        const productosRef = collection(db, "productos")
        const q = categoriaId 
                    ? query(productosRef, where("categoria", "==", categoriaId), limit(100))
                    //? query(productosRef, where("categoria", "==", categoriaId), where("precio", "<", 5000))
                    : productosRef

        //2- pedir referencia (asincrónico) cuáles documentos?
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

        if (!categoriaId) {
            console.log(" ...INDEFINIDA")
        }
        

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