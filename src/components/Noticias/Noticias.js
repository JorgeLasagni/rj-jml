import { Turores } from "./Turores.js"

export const Noticias = (children) => {
    console.log(children)
    return (
        <section>
            <h4> Noticias de HOY y de HOY, Che!!! </h4>
            <hr/>
            <p> Palabras varias de lorem <b> strong </b> etc ...</p>   
            <div> Este es un div sí, un div!!!          </div> 
            {children}
             
        </section>
    )
}
//export default Noticias