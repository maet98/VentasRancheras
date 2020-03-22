import React from "react";
import menuImg from "../../menu.svg";
import { Navbar, Nav, Button, NavDropdown, Form, FormControl } from 'react-bootstrap';

export class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="base-container-menu">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="logoIcon.svg"
                            width="10"
                            height="10"
                            className="d-inline-block align-top"
                        />{' '}
                        Ventas Rancheras
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="confirmarPagos">Confirmar Pagos</Nav.Link>
                            <Nav.Link href="editarInventario">Editar Inventario</Nav.Link>
                            <Nav.Link href="programarRutas">Programar Rutas</Nav.Link>
                            <Nav.Link href="aplicarCargos">Aplicar Cargos</Nav.Link>
                            <Nav.Link href="verPedidos">Ver Pedidos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

}
export default Menu;

/**
 */