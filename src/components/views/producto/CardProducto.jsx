import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import notImage from "../../../assets/notImage.png";


const CardProducto = ({producto}) => {
  const {_id, nombreProducto, precio, imagen} = {...producto};

  return (
    <Col md={4} ld={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src={(imagen)? imagen : notImage}
        />
        <Card.Body>
          <Card.Title>{nombreProducto}</Card.Title>
          <Card.Text>Precio: ${precio}</Card.Text>
          <Link className="btn btn-danger me-2" to={`/detalle/${_id}`}>Ver más</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;