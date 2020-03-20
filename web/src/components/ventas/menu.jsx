import React from "react";
import menuImg from "../../menu.svg";

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
                        <Nav.Link href="confirmarPagos.jsx">Confirmar Pagos</Nav.Link>
                        <Nav.Link href="editarInventario.jsx">Editar Inventario</Nav.Link>
                        <Nav.Link href="programarRutas.jsx">Programar Rutas</Nav.Link>
                        <Nav.Link href="aplicarCargos.jsx">Aplicar Cargos</Nav.Link>
                        <Nav.Link href="verPedidos.jsx">Ver Pedidos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}