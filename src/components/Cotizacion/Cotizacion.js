import { useEffect, useState }  from "react"

export const Cotizacion = () => {

    const apiDolar = "https://criptoya.com/api/dolar";
    const [cotizaciones, setCotizaciones]   = useState([]) 
    const [loading, setLoading]             = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(apiDolar)
            .then(response => response.json())
            //.then(( {blue, ccb, ccl, mep, oficial, solidario, time}=setCotizaciones) => {
            .then((response) => {
                setCotizaciones(response)})
                //console.log({blue, ccb, ccl, mep, oficial, solidario, time})
                //const dateTime= (new Date((time * 1000))).toLocaleString()})
                
            .catch(error => console.error(error))
            .finally( () => {
                setLoading(false)
            })        
    },[])
    
    const {blue, ccb, ccl, mep, oficial, solidario, time} = (cotizaciones)
    const dateTime= (new Date((time * 1000))).toLocaleString()  

    return (
        <div className='container'>
            {/* <h3>Cotizaciones del DOLAR obtenidas de CriptoYa! ( {dateTime} )</h3> */}
            {
            loading
            ? <h5>Buscando Cotizaciones ... </h5>
            :
            
            <div center >
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
// function buscoCotizacion(){
//     const apiDolar = "https://criptoya.com/api/dolar";
//     const divDolar = document.getElementById("divDolar");
//     fetch(apiDolar)
//         .then(response => response.json())
//         .then(( {blue, ccb, ccl, mep, oficial, solidario, time}) => {
//             dateTime= (new Date((time * 1000))).toLocaleString()
//             divDolar.innerHTML = `
//             <select class="form-select" aria-label="Default select example" id="tipoDolar">
//             <option selected>Seleccione Tipo de cambio para expresión en u$s</option>
//             <option value=${0}>de CriptoYa: ${dateTime} </option>
//             <option value=${oficial}>      Dolar Oficial: $${oficial}     </option>
//             <option value=${solidario}>    Dolar Solidario: $${solidario} </option>
//             <option value=${mep}>          Dolar MEP: $${mep}             </option>
//             <option value=${ccl}>          Dolar CCL: $${ccl}             </option>
//             <option value=${ccb}>          Dolar CCB: $${ccb}             </option>
//             <option value=${blue}>         Dolar Blue: $${blue}           </option>
//             </select>
//             `
//         })
//         .catch(error => console.error(error))
// }