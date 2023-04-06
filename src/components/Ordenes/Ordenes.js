import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState }  from "react"
import { OrdenList}              from "./../OrdenList/OrdenList"
import { collection, getDocs }  from "firebase/firestore"
import { db }                   from "../../firebase/config"
import {Spinner}                from "reactstrap"

export const Ordenes = () => {

    const [ordenes, setOrdenes] = useState([]) 
    const [loading, setLoading] = useState(true)     
    useEffect(() => {
        setLoading(true)

        const ordenesRef = collection(db, "ordenes")
        getDocs(ordenesRef)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {...doc.data(),id: doc.id}
                })
                setOrdenes(docs)
            })
            .finally(() => {
                setLoading(false)
                })   
        }, [] )
        console.log(ordenes)
        return (
            <div className="container">
                {   loading
                        ? <div> <Spinner color="danger"/>  </div>
                        :
                        <div>
                            <h5> Ordenes </h5>
                            <OrdenList listado={ordenes}/>
                        </div>
                }
            </div>
        )
}