import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import PantallaInicial from './components/login/PantallaInicial.jsx';
import Menu from './components/ventas/menu.jsx';
import confirmarPagos from "./components/ventas/confirmarPagos"
import programarRutas from "./components/ventas/programarRutas"
import Registrar from "./components/login/register"
import verPedidos from "./components/ventas/verPedidos"
import editarInventario from "./components/ventas/editarInventario"
import verInventario from "./components/ventas/verInventario"
import verOrdenes from "./components/ventas/verOrdenes"
import verClientes from "./components/ventas/verClientes"
import ListarPedidos from "./components/ventas/ListarPedidos"


function App() {
  return ( 
    <Router>
      <Route path="/" exact component ={PantallaInicial} />
      <Route path ="/menu" component =  {Menu} />
      <Route path ="/confirmarPagos" component =  {confirmarPagos} />
      <Route path ="/programarRutas" component =  {programarRutas} />
      <Route path ="/registrar" component =  {Registrar} />
      <Route path ="/verPedidos" component =  {verPedidos} />
      <Route path ="/editarInventario" component =  {editarInventario} />
      <Route path ="/verInventario" component =  {verInventario} />
      <Route path ="/verOrdenes/:id" component =  {verOrdenes} />
      <Route path ="/verClientes/:id" component =  {verClientes} />
      <Route path ="/pedidos" component = {ListarPedidos} />
      
    </Router>
  );
}

export default App;
