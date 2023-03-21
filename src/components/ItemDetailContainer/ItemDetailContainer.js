import { useEffect, useState }  from "react"
import { useParams }            from "react-router-dom"
import { db }                   from "../../firebase/config"
import { doc, getDoc }          from "firebase/firestore"
import { ItemDetail }           from "../ItemDetail/ItemDetail"

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
                console.log(doc.id)
                console.log(doc.data())
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => setLoading(false))      
    }, [itemId] )
    //}, [itemId] )
    return (
        <div>
            {
                loading
                ?
                <h2>Cargando ... </h2>
                : <ItemDetail item={item} />
            }            
        </div>
    )
}