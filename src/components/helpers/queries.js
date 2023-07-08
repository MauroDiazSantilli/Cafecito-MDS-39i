//llamar la variable de entorno
const URL_USUARIO = import.meta.env.VITE_API_USUARIO;
const URL_Producto = import.meta.env.VITE_API_PRODUCTO;

/*
Peticion GET obtener un listado de elementos o un elemento
Peticion POST crear un elemento
Peticion PUT / PATCH editar un elemento
Peticion DELETE borrar un elemento
*/ 

export const login = async (usuario) =>{
    try {
      console.log(usuario);
      const respuesta = await fetch(URL_USUARIO, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      const datos = await respuesta.json();
      return {
        status: respuesta.status,
        mensaje: datos.mensaje,
        usuario: datos.nombre,
        uid: datos.uid
      };

    
    
    } catch (error) {
      console.log("errores en el login");
      return;
    }
  }

// login anterior con db-json
// export const login = async (usuario)=>{
//     console.log(usuario);
//     try{
//         const respuesta = await fetch(URL_USUARIO);
//         const listaUsuarios = await respuesta.json();
//         console.log(listaUsuarios);
//         //buscar si en la listaUsuarios hay un usuario como el que recibi por parametro
//         const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
//         if(usuarioBuscado){
//             console.log('Email encontrado');
//             //verificar el password
//             if(usuarioBuscado.password === usuario.password){
//                 console.log('encontramos al usuario!!!')
//                 return usuarioBuscado;
//             }else{
//                 console.log('password incorrecto');
//                 return null;
//             }
//         }else{
//             console.log('email incorrecto');
//             return null
//         }

//     }catch (error){
//         console.log(error);
//         return null;
//     }
// }

export const obtenerProductos = async()=>{
    try{
        const respuesta = await fetch(URL_Producto);
        const listaProductos = await respuesta.json();
        return listaProductos;
    }catch(error){
        console.log(error)
    }
} 

export const obtenerProducto = async(id)=>{
    try{
        const respuesta = await fetch(`${URL_Producto}/${id}`);
        const productoEditar = await respuesta.json();
        return productoEditar;
    }catch(error){
        console.log(error)
    }
} 

export const consultaBorrarProducto = async(id)=>{
    try{
        const respuesta = await fetch(`${URL_Producto}/${id}`, {
            method: "DELETE"
        });
        return respuesta;
    }catch (error){
        console.log(error);
    }
}
export const consultaCrearProducto = async(producto)=>{
    try{
        const respuesta = await fetch(URL_Producto, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch (error){
        console.log(error);
    }
}
export const consultaEditarProducto = async(producto, id)=>{
    try{
        const respuesta = await fetch(URL_Producto+'/'+id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        console.log(respuesta)
        return respuesta;
    }catch (error){
        console.log(error);
    }
}