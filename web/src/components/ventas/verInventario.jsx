import React from "react";
import inventarioImg from "../../inventario2.svg";
import productoImg from "../../producto.svg";
import NavBar from "../ventas/NavBar";
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
                        <img src={inventarioImg} />
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
                                            Checked
                                        </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>

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
                                            Checked
                                </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>

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
                                            Checked
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
                                    <Card.Title>Hojas de colores</Card.Title>
                                    <Card.Text>
                                        Amplia gama de papel de colores. Papel de gran calidad y colores de gran intensidad y
                                        saturación. Apto para cualquier tipo de impresión.
                            </Card.Text>
                                    <ButtonGroup toggle className="mb-2">
                                        <ToggleButton type="checkbox" defaultChecked value="1">
                                            Checked
                                </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>

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
                                            Checked
                                </ToggleButton>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>

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
                                            Checked
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