import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logoImg from "../../images/logo2.svg";

export class NavBar extends React.Component {
	render() {
		return (
			<div className="base-container-menu">
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="menu">
						<img
							alt=""
							src={logoImg}
							width="70"
							height="70"
							className="d-inline-block align-center"
						/>
						&nbsp; Ventas Rancheras
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/verDesempeño">Ver Desempeño Vendedores</Nav.Link>
							<Nav.Link href="/programarRutas">Programar Rutas</Nav.Link>
							<Nav.Link href="/registrar">Registrar Empleado</Nav.Link>
							<Nav.Link href="/verPedidos">Ver Pedidos</Nav.Link>
							<Nav.Link href="/verInventario">Ver Inventario</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}
export default NavBar;
