import { useEffect, useState }  from "react"
import {Spinner}                from "reactstrap"


export const Cotizacion = () => {

    const apiDolar = "https://criptoya.com/api/dolar";
    const [cotizaciones, setCotizaciones]   = useState([]) 
    const [loading, setLoading]             = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(apiDolar)
            .then(response => response.json())
            .then((response) => {
                setCotizaciones(response)})
            .catch(error => console.error(error))
            .finally( () => {
                setLoading(false)
            })        
    },[])
    
    const {blue, ccb, ccl, mep, oficial, solidario, time} = (cotizaciones)
    const dateTime= (new Date((time * 1000))).toLocaleString()  

    return (
        <div className='container'> 
            {
            loading
            ? <Spinner color="danger" />
            :
            <div container >
                <h3>Cotizaciones del DOLAR obtenidas de CriptoYa!! ( {dateTime} )</h3>
                    <p> <b>Oficial:</b>     ${oficial}   </p>
                    <p> <b>Blue:</b>        ${blue}      </p>
                    <p> <b>C.C.B.:</b>      ${ccb}       </p>
                    <p> <b>C.C.B.:</b>      ${ccb}       </p>
                    <p> <b>C.C.L.:</b>      ${ccl}       </p>
                    <p> <b>Solidario:</b>   ${solidario} </p>
                    <p> <b>C.C.B.:</b>      ${ccb}       </p>
                    <p> <b>M.E.P.:</b>      ${mep}       </p>   
            </div>}
        </div> 
    )
}