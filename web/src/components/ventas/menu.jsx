import React from "react";
import menuImg from "../../menu.svg";
import {Navbar, Nav} from 'react-bootstrap';

export class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

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
        );
    }

}
export default Menu;