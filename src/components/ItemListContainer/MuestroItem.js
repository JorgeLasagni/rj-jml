// export const MuestroItem = ( {greeting} ) => {
//     return (
//         <p> {greeting} </p>
//     )
// }
// export const MuestroImagen = ( {greeting} ) => {
//     return (
//         <img src={greeting} alt=""/>
//     )
// }

import ListGroup from 'react-bootstrap/ListGroup';
export const MuestroItem = ( props ) => {
    const {leyenda, imagen} = props
    return (
        // <p> {leyenda} <img src={imagen} alt=""/> </p>
        <ListGroup.Item action variant="info">
        {leyenda} <img src={imagen} alt=""/>
        </ListGroup.Item>
    )
}
