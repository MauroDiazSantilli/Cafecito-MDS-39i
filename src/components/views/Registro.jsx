import { Button, Form } from "react-bootstrap";

import { useForm } from "react-hook-form";

const Registro = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
} = useForm();


  return (
    <div className="mt-5 main">
      <h3 className="text-center">Registro</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <Form onSubmit={handleSubmit()}>
            <Form.Group className="mb-2">
            <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario" maxLength={50} {
                  ...register('nombreUsuario', {
                      //validaciones
                      required: 'El nombre de usuario es obligatorio',
                      minLength:{
                        value:2,
                        message:"Este campo debe tener como minimo 2 caracteres"
                      },
                      maxLength:{
                        value:30,
                        message:"Este campo debe tener como maximo 30 caracteres"
                      },
                    pattern: {
                        value: /^.{2,30}$/,
                        message: "El nomrbe de usuario debe tener entre 2 y 30 caracteres"
                    }
                  })
              } />
              <Form.Text className="text-danger">
                  {errors.nombreUsuario?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese un email" maxLength={50} {
                                ...register('email', {
                                    //validaciones
                                    required: 'El email es obligatorio',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Debe ingresar un email válido"
                                    }
                                })
                            } />
                            <Form.Text className="text-danger">
                                {errors.email?.message}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" maxLength={20} {
                                ...register('password', {
                                    required: 'El password es obligatorio',
                                     minLength:{
                                        value:6,
                                        message:"El password contener por lo menos 6 caracteres"
                                      },
                                      maxLength:{
                                        value:20,
                                        message:"El password debe contener como maximo 20 caracteres"
                                      },
                                    pattern: {
                                        value: /^.{6,20}$/,
                                        message: "El password debe tener entre 6 y 20 caracteres"
                                    }
                                })
                            } />
                            <Form.Text className="text-danger">
                                {errors.password?.message}
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