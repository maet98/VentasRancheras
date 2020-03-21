import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import PantallaInicial from './components/login/PantallaInicial.jsx';
import Menu from './components/ventas/menu.jsx';
import confirmarPagos from "./components/ventas/confirmarPagos"
import programarRutas from "./components/ventas/programarRutas"
import aplicarCargos from "./components/ventas/aplicarCargos"
import verPedidos from "./components/ventas/verPedidos"

function App() {
  return (
    <Router>
      <Route path="/" exact component ={PantallaInicial} />
      <Route path ="/menu" component =  {Menu} />
      <Route path ="/confirmarPagos" component =  {confirmarPagos} />
      <Route path ="/programarRutas" component =  {programarRutas} />
      <Route path ="/aplicarCargos" component =  {aplicarCargos} />
      <Route path ="/verPedidos" component =  {verPedidos} />
      
    </Router>
  );
}

export default App;
