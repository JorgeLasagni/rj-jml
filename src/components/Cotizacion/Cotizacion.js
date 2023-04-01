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

    //{"oficial":215.5,"solidario":355.575,"blue":394,"ccb":393.61,"mep":394.07,"ccl":403.36,"mepgd30":394.07,"cclgd30":400.98,"blue_bid":390,"qatar":431,"time":1680278480}

    //const {blue, ccb, ccl, mep, oficial, solidario, time} = (cotizaciones)

    const {oficial, solidario, blue, ccb, mep, ccl, mepgd30, cclgd30, blue_bid, qatar, time} = (cotizaciones)
    const dateTime= (new Date((time * 1000))).toLocaleString()  

    return (
        <div className='container'> 
            {
            loading
            ? <Spinner color="danger" />
            :
            <div className="container justify-content-center" >
                <h3>Cotizaciones del DOLAR obtenidas de CriptoYa!! ( {dateTime} )</h3>
                <div className='container col-3 my-2'>
                    <div>
                        <p> <b>Oficial:</b>     ${oficial}   </p>
                        <p> <b>Solidario:</b>   ${solidario} </p>
                    </div>
                    <div >
                        <p> <b>Blue:</b>        ${blue}      </p>
                        <p> <b>C.C.B.:</b>      ${ccb}       </p>
                    </div>
                    <div>
                        <p> <b>M.E.P.:</b>      ${mep}       </p>   
                        <p> <b>C.C.L.:</b>      ${ccl}       </p>
                    </div>
                    <div>
                        <p> <b>M.E.P. GD30:</b> ${mepgd30}   </p>
                        <p> <b>C.C.L. GD30:</b> ${cclgd30}   </p>
                    </div>
                    <div>
                        <p> <b>Blue BID:</b>    ${blue_bid}  </p>
                        <p> <b>QATAR: </b>      ${qatar}     </p>
                    </div>
                </div>
            </div>}
        </div> 
    )
}