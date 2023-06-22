import { Button } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import Swal from "sweetalert2"
import { consultaBorrarProducto, obtenerProductos } from "../../helpers/queries";

const ItemProducto = ({ producto, setProductos }) => {

    const borrarProducto = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Seguro que deseas borrar el producto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!',
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {

                // aqui tengo que hacer la peticion DELETE 
                consultaBorrarProducto(producto.id).then((respuesta) => {
                    if (respuesta.status === 200) {
                        Swal.fire(
                            'Eliminado!',
                            `El producto ${producto.nombreProducto} fue eliminado`,
                            'success'
                        )
                        //actualizar el sate producto del componente administrador
                        obtenerProductos().then((respuesta)=>{setProductos(respuesta)})
                        
                    } else {
                        Swal.fire("Se produjo un error", "Error, intentelo mas tarde ", "error")
                    }
                })
            }
        })
    }

    return (
        <tr>
            <td>{producto.id}</td>
            <td>{producto.nombreProducto}</td>
            <td>{producto.precio}</td>
            <td>{producto.imagen}</td>
            <td>{producto.categoria}</td>
            <td className='text-center'>
                <Link to={`/administrador/editar/${producto.id}`} className={"btn btn-warning m-1"} >Editar</Link>
                <Button className='m-1' variant="danger" onClick={borrarProducto}>Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemProducto;