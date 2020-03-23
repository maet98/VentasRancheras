import React from "react";
import inventarioImg from "../../inventario2.svg";
import productoImg from "../../producto.svg";
import NavBar from "../ventas/NavBar";
import "../login/style.scss"
import { Card, ButtonGroup, ToggleButton, Col, Row } from 'react-bootstrap';

export class verInventario extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div className="base-container" ref={this.props.containerRef}>
                <div>
                    <NavBar />
                </div>
                <div className="header">Inventario</div>
                <div className="content">
                    <div className="image">
                        <img className="centrado" src={inventarioImg} />
                    </div>
                </div>

                <div className="classCard">


                    <Row xs="2">
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={productoImg} />
                                <Card.Body className="form">
                                    <Card.Title>Hojas de colores</Card.Title>
                                    <Card.Text>
                                        Amplia gama de papel de colores. Papel de gran calidad y colores de gran intensidad y
                                        saturación. Apto para cualquier tipo de impresión.
                                    </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                        Ver producto
                                        </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={productoImg} />
                                <Card.Body className="form">
                                    <Card.Title>Calculadora</Card.Title>
                                    <Card.Text>
                                        Fuente de alimentación dual por energía solar o 1 pila AA.
                                        Apagado automático, ahorra más energía (botón ON/OFF).
                            </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                        Ver producto
                                </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={productoImg} />
                                <Card.Body className="form">
                                    <Card.Title>Mouse Pad</Card.Title>
                                    <Card.Text>
                                    Minialfombrilla de ratón para videojuegos: ideal para los 
                                    videojuegos, diseñadores gráficos o cualquiera que use un ratón.
                            </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                        Ver producto
                                </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row xs="2" className="classCard">
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={productoImg} />
                                <Card.Body className="form">
                                    <Card.Title>Escritorio</Card.Title>
                                    <Card.Text>
                                        Tablero aglomerado de 16 mm de estructura resistente
                                        Diseño elegante y a la vez completamente práctico.
                            </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                        Ver producto
                                </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={productoImg} />
                                <Card.Body className="form">
                                    <Card.Title>Lámpara</Card.Title>
                                    <Card.Text>
                                    Esta lámpara lupa es ajustable y giratorio según su necesidad, muy práctica. 
                                    El diseño de manos libres, con la lente de aumento 8x.
                            </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                        Ver producto
                                </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={productoImg} />
                                <Card.Body className="form">
                                    <Card.Title>Silla Giratoria</Card.Title>
                                    <Card.Text>
                                    Asiento: 35 cm. Altura total: 75–87 cm aprox.  
                                    Regulable en altura, giro completo de 360°. Asiento acolchado, fácil de limpiar.
                            </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Ver producto
                                </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
export default verInventario