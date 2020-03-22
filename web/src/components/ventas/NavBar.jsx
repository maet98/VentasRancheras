import React from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
import logoImg from "../../logo2.svg";

export class NavBar extends React.Component {


    render() {

        return (
            <div className="base-container-menu">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="menu">
                        <img
                            alt=""
                            src={logoImg}
                            width="35"
                            height="35"
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
                            <Nav.Link href="registrar">Registrar Empleado</Nav.Link>
                            <Nav.Link href="verPedidos">Ver Pedidos</Nav.Link>
                            <Nav.Link href="verInventario">Inventario</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>    
            </div>
        );
    }

}
export default NavBar;