//llamar la variable de entorno
const URL_USUARIO = import.meta.env.VITE_API_USUARIO;

export const login = ()=>{
    console.log(URL_USUARIO);

}