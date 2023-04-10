export const OrdenList = ( {listado}  ) => {

    return (
        <div className="container justify-content-center">
            <hr />            
            <div  className="container justify-content-center">
                {listado.map( (orden) =>(
                <div className="row my-3" key={orden.id}>
                    <p> <b>Orden: {orden.id}</b> </p>
                    <p> {orden.cliente.nombre}   </p>
                    <p> {orden.cliente.direccion}</p>
                    <p> {orden.cliente.email}    </p>
                    <p> Total: ${orden.total}    </p>
                    <hr />
                    <p>Detalle de la compra</p>
                    {orden.items.map((witem) => (
                        <div>
                            <p>{witem.nombre}</p>
                            <p>precio:  ${witem.precio}</p>
                            <p>Cantidad {witem.cantidad}</p>
                            <hr />
                        </div>
                        )
                    )}
                    <hr />
                </div>))}
            </div>
        </div>
    )
} 