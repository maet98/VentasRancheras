import React from "react";
import rutasImg from "../../images/ruta.svg";
import paqueteImg from "../../images/paquete.svg";
import NavBar from "./NavBar";
import "../login/style.scss"
import { Card,ListGroup,ListGroupItem, Col, Row, Button } from 'react-bootstrap';

export class verRutas extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
this.state = {
    vals:['Dynamically','Loading','From Array 1'],
    vals2: ['Dynamically', 'Loading', 'From Array 2']
}

 
}

   handleClick(e) {
    e.preventDefault()   
    console.log('test')
   }

    render() {
        let vals = this.state.vals
        let vals2 = this.state.vals2
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
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={paqueteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Ordenes Por Asignar </Card.Title>
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
                            <br />
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={paqueteImg} />
                                <Card.Body className="form">
                                    <Card.Title>Ordenes Asignadas al Repartidor</Card.Title>
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
export default verRutas