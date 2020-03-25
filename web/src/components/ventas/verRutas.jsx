import React from "react";
import rutasImg from "../../images/ruta.svg";
import paqueteImg from "../../images/paquete.svg";
import NavBar from "../ventas/NavBar";
import "../login/style.scss"
import { Card, ButtonGroup, ToggleButton, Col, Row } from 'react-bootstrap';

export class verRutas extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div className="base-container" ref={this.props.containerRef}>
                <div>
                    <NavBar />
                </div>
                <div className="header">Ver Rutas</div>
                <div className="content">
                    <div className="image">
                        <img className="centrado" src={rutasImg} />
                    </div>
                </div>

                <div className="classCard">


                    <Row xs="6">
                        <Col>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={paqueteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Asignado a: </Card.Title>
                                    <Card.Text>
                                        Dirección: Calle Julia #26
                                    </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Asignar
                                        </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={paqueteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Asignado a: </Card.Title>
                                    <Card.Text>
                                        Dirección: Calle Julia #26
                                    </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Asignar
                                        </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        
                        <Col>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={paqueteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Asignado a: Emilio Vargas</Card.Title>
                                    <Card.Text>
                                        Dirección: Calle Julia #26
                                    </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Repartir
                                        </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={paqueteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Asignado a: Julian Mateo</Card.Title>
                                    <Card.Text>
                                        Dirección: Calle Julia #26
                                    </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Repartir
                                        </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>



                    </Row>

                    <Row xs="6">
                        <Col>
                            <br />
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={paqueteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Asignado a: </Card.Title>
                                    <Card.Text>
                                        Dirección: Calle Julia #26
                                    </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Asignar
                                        </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <br />
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={paqueteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Asignado a: </Card.Title>
                                    <Card.Text>
                                        Dirección: Calle Julia #26
                                    </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Asignar
                                        </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        <Col><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Col>
                        
                        <Col>
                            <br />
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={paqueteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Asignado a: Felix Henriquez</Card.Title>
                                    <Card.Text>
                                        Dirección: Calle Julia #26
                                    </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Repartir
                                        </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <br />
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={paqueteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Asignado a: Brian Casanova</Card.Title>
                                    <Card.Text>
                                        Dirección: Calle Julia #26
                                    </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Repartir
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
export default verRutas