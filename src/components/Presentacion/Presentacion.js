

export const Presentacion = ( {nombre, rol, edad} ) => {
    //const {nombre, rol, edad} = props
    return (
        <article>
            <hr/>
            <h2>Nombre: {nombre}    </h2>
            <p> Rol:    {rol}       </p>
            <p> Edad:   {edad}      </p>
            <hr/>
        </article>
    )
}