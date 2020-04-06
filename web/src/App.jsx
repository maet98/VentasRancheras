import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/ventas/NavBar";
import PantallaInicial from "./components/login/PantallaInicial.jsx";
import Menu from "./components/ventas/menu.jsx";
import confirmarPagos from "./components/ventas/confirmarPagos";
import ProgramarRutas from "./components/ventas/ProgramarRutas";
import Registrar from "./components/login/register";
import verPedidos from "./components/ventas/verPedidos";
import editarInventario from "./components/ventas/editarInventario";
import verInventario from "./components/ventas/verInventario";
import verClientes from "./components/ventas/verClientes";
import VerOrdenes from "./components/ventas/VerOrdenes";
import ListarPedidos from "./components/ventas/ListarPedidos";
import ListarOrdenesPorEmpleado from "./components/ventas/listarOrdenesPorEmpleado.jsx";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" exact component={PantallaInicial} />
					<Router>
						<NavBar />
						<Switch>
							<Route path="/menu" component={Menu} />
							<Route path="/verDesempeño" component={confirmarPagos} />
							<Route path="/programarRutas" component={ProgramarRutas} />
							<Route path="/registrar" component={Registrar} />
							<Route path="/verPedidos" component={verPedidos} />
							<Route path="/editarInventario" component={editarInventario} />
							<Route path="/verInventario" component={verInventario} />
							<Route path="/verOrdenes/:id" component={VerOrdenes} />
							<Route path="/verClientes/:id" component={verClientes} />
							<Route path="/pedidos/:id" component={ListarPedidos} />
							<Route path="/Desempeño/:id" component={ListarOrdenesPorEmpleado} />
						</Switch>
					</Router>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
