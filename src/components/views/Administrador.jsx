import { Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { useEffect, useState } from "react";
import { obtenerProductos } from "../helpers/queries";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Administrador = () => {

  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    obtenerProductos().then((respuesta)=>{
      console.log(respuesta)
      if(respuesta){
        setProductos(respuesta);
        // todo: resolver la situacion cuando no puedo realizar la conexion a la API
      }else{
        Swal.fire('Error al buscar productos', 'no se pueden mostrar los productos intentelo luego', 'error')
      }
    })
  },[])

    return (
        <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Productos disponibles</h1>
          <Link className="btn btn-primary" to='/administrador/crear'>
            Agregar
          </Link>
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
              productos.map((producto)=> <ItemProducto key={producto._id} producto={producto} setProductos={setProductos}></ItemProducto>)
            }
          </tbody>
        </Table>
      </section>
    );
};

export default Administrador;