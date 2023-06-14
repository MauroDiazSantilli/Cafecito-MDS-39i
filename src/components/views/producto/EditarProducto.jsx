import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { obtenerProducto } from "../../helpers/queries";
import { useParams } from "react-router-dom";
import 'sweetalert2/dist/sweetalert2.css'
import Swal from 'sweetalert2';

const EditarProducto = () => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    obtenerProducto(id).then((respuesta) => {
      console.log(respuesta);
      setValue("nombreProducto", respuesta.nombreProducto)
      setValue("precio", respuesta.precio)
      setValue("imagen", respuesta.imagen)
      setValue("categoria", respuesta.categoria)
      setValue("descripcion", respuesta.categoria)
      // todo: agregar el resto de los setValue
    })
   // Error al pedir el GET
    .catch((error) => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo obtener el producto. Por favor, intenta nuevamente más tarde.',
      })
    })
  }, [])

  const onSubmit = (productoNuevo) => {
    console.log(productoNuevo);
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripción*</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Escriba una descripción del producto"
            {...register("descripcion", {
              required: "La descripción es obligatoria",
              minLength: {
                value: 10,
                message: "La descripción debe tener al menos 10 caracteres",
              },
              maxLength: {
                value: 500,
                message: "La descripción debe tener como máximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "El precio del producto es obligatorio",
              min: {
                value: 1,
                message: "El precio minimo es de $1",
              },
              max: {
                value: 10000,
                message: "El precio maximo es de $10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La imagen es obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La imagen es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="bebida caliente">Bebida caliente</option>
            <option value="bebida fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarProducto;