import {useState, useEffect}       from "react"
export const Contador = () => {

    const [counter, setCounter] = useState(0)
    //console.log("¡Click! -> " + counter)
    //const [estado, setEstado] = useState()
    //console.log(estado)
    const [hola, setHola] = useState(true)

    const handleClick = () => {
        counter >= 5 ? setCounter( 0 ) : setCounter( counter + 1 )
        //setCounter( counter + 1 )
    }

    const handleHola = () => {
        setHola(!hola)
    }

    //console.log("Componente MONTADO")
    // useEffect(fn, array)
    useEffect(() => {
        //el efecto ocurre sólo en el 1er renderizado del componente...
        //MONTAJE!!!
        console.log("Componente MONTADO")

        return () => {
            //Componente DESMONTADO!!!
            console.log("Componente DESMONTADO")
        }

    }, [])

    useEffect(() => {
        //Efecto con DEPENDENCIAS
        console.log("Componente con ESTADO ACTUALIZADO Counter-> "+counter + " Hola-> " + hola)
        if (counter % 2 === 0) {
            console.log("Counter es PAR")
        } else {
            console.log("Counter es IMPAR")
        }
    }, [counter, hola])
    
    return (
        // <div container my-5>
        <div container>
            <hr />
            <button onClick={handleClick} className="btn btn-primary"> Haceme CLICK! hasta 5 veces!! y van: {counter}!!! ...  {counter % 2 === 0 ? "PAR" : "IMPAR"} </button>
            {/* <p>Clicks: {counter} </p> */}
            <hr />
            <button onClick={handleHola}  className="btn btn-success">
                {hola ? "Hola! MUNDO" : "Ciao! MUNDO"}    
            </button>
            <hr />
            <p> último click: {new Date().toLocaleTimeString()}</p>
            <hr />
        </div>
    )
}