import React from "react";
import menuImg from "../../menu.svg";
<<<<<<< HEAD
import { Navbar, Nav, Button, NavDropdown, Form, FormControl } from 'react-bootstrap';
=======
import {Navbar, Nav} from 'react-bootstrap';
>>>>>>> d4f4ce7c075da3487509b0c1dc5ec465e900ad77

export class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
<<<<<<< HEAD
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
=======

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">BWB</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="confirmarPagos">Confirmar Pagos</Nav.Link>
                        <Nav.Link href="editarInventario">Editar Inventario</Nav.Link>
                        <Nav.Link href="programarRutas">Programar Rutas</Nav.Link>
                        <Nav.Link href="aplicarCargos">Aplicar Cargos</Nav.Link>
                        <Nav.Link href="verPedidos">Ver Pedidos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
>>>>>>> d4f4ce7c075da3487509b0c1dc5ec465e900ad77
        );
    }

}
<<<<<<< HEAD
export default Menu;

/**
 */
=======
export default Menu;
>>>>>>> d4f4ce7c075da3487509b0c1dc5ec465e900ad77
