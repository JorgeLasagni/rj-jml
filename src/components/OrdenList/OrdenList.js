export const OrdenList = ( {listado}  ) => {

    return (
        <div className="container justify-content-center">
            <hr />            
            <div  >
                {listado.map( (orden) =>(
                <div className="row my-3">
                    <p> {orden.cliente.nombre}</p>
                    <p> {orden.cliente.direccion}</p>
                    <p> {orden.cliente.email}</p>
                    <p> Total: ${orden.total} </p>
                    <hr />
                </div>))}
            </div>
        </div>
    )
} 