import imgBanner from "../../assets/cafeBanner.jpg"
import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useState, useEffect } from "react";
import { obtenerProductos } from "../helpers/queries";

const Inicio = () => {
  const [productos, setProductos] = useState([])

  useEffect(()=>{
    obtenerProductos().then((respuesta)=>{
      setProductos(respuesta)
    })
  },[])

  return (
    <main className="main">
        <Container fluid className="p-0">
            <Row>
                <img src={imgBanner} alt="" className="imgBanner" />
            </Row>
        </Container>
        <Container className="my-4">
            <h1>Nuestros Productos</h1>
            <hr />
            <Row className="alineacionProductos">
               {
                productos.map((producto) => {
                        return <CardProducto producto={producto} key={producto.id}></CardProducto>
                })
            }
            </Row>
        </Container>
    </main>
);
};

export default Inicio;