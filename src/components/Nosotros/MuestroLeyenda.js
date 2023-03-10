import ListGroup from 'react-bootstrap/ListGroup';
export const MuestroLeyenda = ( props ) => {
    const {itm, leyenda, imagen} = props
    return (
        <ListGroup.Item action variant="info">
            <b>{itm} </b>{leyenda} <img src={imagen} alt=""/>
        </ListGroup.Item>          
    )
}
