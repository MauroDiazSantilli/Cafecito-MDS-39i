import { Container, Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react";
import { obtenerProducto } from "../helpers/queries";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState({})

    useEffect(() => {
        obtenerProducto(id).then((respuesta) => {
            setProducto(respuesta)
        })

    }, [])

    return (
        <Container className="main">
            <Row className="my-4 border rounded">
                <Col xs={12} md={6} className="text-center bg-dark" >
                    <img src={producto.imagen} alt="imagen de producto" className="imagenDetalleProducto" />
                </Col>
                <Col xs={12} md={6} >
                    <article className="p-2">
                        <h3>{producto.nombreProducto}</h3>
                        <hr />
                        <p>{producto.descripcion}
                        </p>
                        <br />
                        <p className="text-danger">Categoria: <span className="text-dark">{producto.categoria}</span></p>
                        <p className="text-danger">Precio: <span className="text-dark">$ {producto.precio}</span></p>
                    </article>
                </Col>
            </Row>
        </Container>
    );
};

export default DetalleProducto;