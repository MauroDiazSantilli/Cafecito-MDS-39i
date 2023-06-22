import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Error404 from "./components/views/Error404";
import Inicio from "./components/views/Inicio";
import DetalleProducto from "./components/views/DetalleProducto";
import Registro from "./components/views/Registro"
import Login from "./components/views/Login"
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdministrador from "./components/routes/RutasAdministrador";


const App = () => {
  const usuarioDelSessionStorage = JSON.parse(sessionStorage.getItem("usuarioLogueado")) || {}
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioDelSessionStorage)


  return (

    <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>} ></Route>
        <Route exact path="/registro" element={<Registro></Registro>} ></Route>
        <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>} ></Route>
        <Route path="/administrador/*" element={
            <RutasProtegidas>
              <RutasAdministrador></RutasAdministrador>
            </RutasProtegidas>
        }></Route>

        <Route exact path="/detalleProducto/:id" element={<DetalleProducto></DetalleProducto>} ></Route>
        <Route path="*" element={<Error404></Error404>} ></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  );
};

export default App;