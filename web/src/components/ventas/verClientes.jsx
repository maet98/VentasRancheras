import React from "react";

import clienteImg from "../../images/clientes.svg";
import NavBar from "../ventas/NavBar";
import "../login/style.scss"
import { Card, Col, Row, Button, ListGroup} from 'react-bootstrap';

export class verClientes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vals:['Dynamically','Loading','From Array 1'],
            vals2: ['Dynamically', 'Loading', 'From Array 2']
        }
    }


    render() {
        let vals = this.state.vals
        let vals2 = this.state.vals2
        return (

            <div className="base-container" ref={this.props.containerRef}>
                <div>
                   <NavBar />
                </div>
        <div className="header">Asignar Ordenes al cliente: {this.props.match.params.id}</div>
                <div className="content">
                    <div className="image">
                        <img className="centrado" src={clienteImg} alt="desc" />
                    </div>
                </div>

                <div className="classCard">


                    <Row xs="6">
                        <Col>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={clienteImg} alt="desc" />
                                <Card.Body className="form">
                                    <Card.Title>Clientes sin Vendedor Asignado</Card.Title>
                                    <ListGroup >
                {vals.map(val => 
                    {
                        return <ListGroup.Item action >{val}</ListGroup.Item>
                        })
                }
                            </ListGroup>
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
                        <Col><br /><br /><br /><br /><br /><Button type="submit" onClick={this.handleClick}>Asignar</Button>
                        <br /><br /><br /><br /><br /></Col>
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
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={clienteImg} alt="desc" />
                                <Card.Body className="form">
                                    <Card.Title>Clientes Previamentes Asignados al Vendedor</Card.Title>
                                    <ListGroup >
                {vals2.map(val => 
                    {
                        return <ListGroup.Item action >{val}</ListGroup.Item>
                        })
                }
                            </ListGroup>
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