import React from "react";
import { Navbar, Nav} from 'react-bootstrap';

export class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="base-container-menu">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="menu">
                        <img
                            alt=""
                            src="/src/logoIcon.svg"
                            width="30"
                            height="30"
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
export default NavBar;