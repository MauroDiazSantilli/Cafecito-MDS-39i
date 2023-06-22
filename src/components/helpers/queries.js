// llamar a la variable de entorno
const URL_USUARIO = import.meta.env.VITE_API_USUARIO
const URL_PRODUCTO = import.meta.env.VITE_API_PRODUCTO

/*
Peticion GET obtener un listado de elementos o un elemento
Peticion POST crear un elemento
Peticion PUT / PATCH editar un elemento
Peticion DELETE borrar un elemento
*/ 

export const login = async (usuario)=>{
    
    console.log(usuario)
    try {
        const respuesta = await fetch(URL_USUARIO);
        const listaUsuarios = await respuesta.json();
        console.log(listaUsuarios)
        //buscar si algun usuario coincide con el que recibi por parametros
        const usuarioBuscado = listaUsuarios.find((itemUsuario)=>itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            console.log("email encontrado")
            //verificar el password
            if(usuarioBuscado.password === usuario.password){
                console.log("encontramos al usuario")
                return usuarioBuscado
            } else {
                console.log("password incorrecto")
                return null
            }
        } else {
            console.log("email incorrecto")
            return null
        }
    } catch (error) {
        console.log(error)
        return null
    }
}

export const obtenerProductos = async ()=>{
    try {
        const respuesta = await fetch(URL_PRODUCTO)
        const listaProductos = await respuesta.json()
        return listaProductos

    } catch (error) {
        console.log(error)
        return null
    }
}
export const obtenerProducto = async (id)=>{
    try {
        const respuesta = await fetch(`${URL_PRODUCTO}/${id}`)
        const productoEditar = await respuesta.json()
        return productoEditar

    } catch (error) {
        console.log(error)
        return null
    }
}

export const consultaBorrarProducto = async (id)=>{
    try {
        const respuesta = await fetch(`${URL_PRODUCTO}/${id}` , {
            method:"DELETE"
        });
        // const listaProductos = await respuesta.json()
        return respuesta

    } catch (error) {
        console.log(error)
        return null
    }
}

export const consultaCrearProducto = async (producto)=>{
    try {
        const respuesta = await fetch(URL_PRODUCTO, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta

    } catch (error) {
        console.log(error)
        return null
    }
}

export const consultaEditarProducto = async (producto, id)=>{
    try {
        const respuesta = await fetch(URL_PRODUCTO+"/"+id, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta

    } catch (error) {
        console.log(error)
        return null
    }
}