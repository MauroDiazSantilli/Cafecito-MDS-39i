import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Registro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-5 mainSection">
      <h3 className="text-center">Registro</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario"
                {...register("usuario", {
                  required: "El nombre del usuario es obligatorio",
                  minLength: {
                    value: 2,
                    message:
                      "El nombre del usuario debe tener como mínimo 2 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message:
                      "El nombre del usuario debe tener como máximo 50 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.usuario?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control 
                type="email"
                placeholder="Ingrese un email" 
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Ingrese un email válido",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>            
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control 
                type="password" 
                placeholder="Ingrese una contraseña"
                {...register("contrasenia", {
                  required: "La contraseña es obligatoria",
                  minLength:{
                    value: 4,
                    message: "La contraseña debe tener al menos 4 caracteres"
                  }
                })}
              />
              <Form.Text className="text-danger">
                {errors.contrasenia?.message}
              </Form.Text>   
            </Form.Group>
            <div className="row">
              <Button
                className="btn btn-dark btn-lg btn-block mb-2"
                type="submit"
              >
                Registrar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
