import ListGroup from 'react-bootstrap/ListGroup';
export const MuestroLeyenda = ( props ) => {
    const {leyenda, imagen} = props
    return (
        <ListGroup.Item action variant="info">
        {leyenda} <img src={imagen} alt=""/>
        </ListGroup.Item>
    )
}
