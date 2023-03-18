export const LowStockMsg = ({stock}) => {
    if (stock===0){
        return (
        <p><b>Stock Agotado!!!</b></p>
        )
    }
    return (
        <p> <b>
            {
            stock === 1
            ? `Queda sólo 1 Unidad`
            : `Quedan sólo ${stock} Unidades`
            }
        </b></p>
    )
}