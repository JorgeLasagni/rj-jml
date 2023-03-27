import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState }  from "react"
import { useParams }            from "react-router-dom"
import { db }                   from "../../firebase/config"
import { doc, getDoc }          from "firebase/firestore"
import { ItemDetail }           from "../ItemDetail/ItemDetail"
import {Spinner}                from "reactstrap"

export const ItemDetailContainer = () => {
    
    const [item, setItem]       = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId }            = useParams()
    
    useEffect(() => {
        setLoading(true)
        // 1.- referencia (sincrónico)
        const docRef = doc(db, "productos", itemId)

        // 2.- llamado (asincrónico)
        getDoc(docRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => setLoading(false))      
    }, [itemId] )
    return (
        <div>
            {
                loading
                ? <Spinner color="danger" />
                : <ItemDetail item={item} />
            }            
        </div>
    )
}