import React from "react";
import ordenImg from "../../images/orden.svg";
import clienteImg from "../../images/clientes.svg";
import NavBar from "../ventas/NavBar";
import "../login/style.scss"
import { Card, ButtonGroup, ToggleButton, Col, Row } from 'react-bootstrap';

export class verClientes extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div className="base-container" ref={this.props.containerRef}>
                <div>
                    <NavBar />
                </div>
                <div className="header">Ver Clientes Asignados al Empleado: {this.props.match.params.id}</div>
                <div className="content">
                    <div className="image">
                        <img className="centrado" src={ordenImg} />
                    </div>
                </div>

                <div className="classCard">


                    <Row xs="6">
                        <Col>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={clienteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Verificado por: </Card.Title>
                                    <Card.Text>
                                        Dirección: Calle Julia #26
                                    </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Verificar
                                        </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={clienteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Verificado por: </Card.Title>
                                    <Card.Text>
                                        Dirección: Calle Julia #26
                                    </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Verificar
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
                                <Card.Img variant="top" src={clienteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Verificado por: Emilio Vargas</Card.Title>
                                    <Card.Text>
                                        Dirección: Calle Julia #26
                                    </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Despachar
                                        </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={clienteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Verificado por: Julian Mateo</Card.Title>
                                    <Card.Text>
                                        Dirección: Calle Julia #26
                                    </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Despachar
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
                                <Card.Img variant="top" src={clienteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Verificado por: </Card.Title>
                                    <Card.Text>
                                        Dirección: Calle Julia #26
                                    </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Verificar
                                        </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <br />
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={clienteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Verificado por: </Card.Title>
                                    <Card.Text>
                                        Dirección: Calle Julia #26
                                    </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Verificar
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
                                <Card.Img variant="top" src={clienteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Verificado por: Felix Henriquez</Card.Title>
                                    <Card.Text>
                                        Dirección: Calle Julia #26
                                    </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Despachar
                                        </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <br />
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={clienteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Verificado por: Brian Casanova</Card.Title>
                                    <Card.Text>
                                        Dirección: Calle Julia #26
                                    </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Despachar
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
export default verClientes