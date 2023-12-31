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
    <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="fondo cafe"
      />
      <Container>
        <h1 className="display-4 text-center">Nuestros Productos</h1>
        <hr />
        <Row>
        {
          productos.map((producto)=>  <CardProducto key={producto._id} producto={producto}></CardProducto>)
        }
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;