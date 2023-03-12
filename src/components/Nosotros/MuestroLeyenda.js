import ListGroup from 'react-bootstrap/ListGroup';
export const MuestroLeyenda = ( {leyenda} ) => {
    return (
        <ListGroup.Item action variant="info">
            {leyenda}
        </ListGroup.Item>   
    )
}
