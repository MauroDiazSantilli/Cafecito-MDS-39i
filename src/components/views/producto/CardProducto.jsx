import { Card, Col, Button } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"


const CardProducto = ({producto}) => {
    return (
        <Col xs={8} md={4} lg={3}>
            <Card className="m-1">
                <Card.Img variant="top" src={producto.imagen} className="imagenProductoInicio" />
                <Card.Body className="cuerpoProductoInicio">
                    <Card.Title>{producto.nombreProducto}</Card.Title>
                    <Card.Text>
                    $ {producto.precio}
                    </Card.Text>
                    <NavLink end to={`/detalleProducto/${producto.id}`} className={"btn btn-primary"} >Ver detalle</NavLink>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardProducto;