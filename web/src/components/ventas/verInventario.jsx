import React from "react";
import inventarioImg from "../../images/inventario2.svg";
import productoImg from "../../images/producto.svg";
import NavBar from "../ventas/NavBar";
import "../login/style.scss"
import { Card, ButtonGroup, ToggleButton, Col, Row } from 'react-bootstrap';

export class verInventario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vals: [
                {
                    title: 'Carta 1',
                    text: 'Dynamically Loaded'    
                },
                {
                    title: 'Carta 2',
                    text: 'Dynamically Loaded'
                },
                {
                    title: 'Carta 3',
                    text: 'Dynamically Loaded'
                },
                {
                    title: 'Carta 4',
                    text: 'Dynamically Loaded'
                },
                 {
                    title: 'Carta 5',
                    text: 'Dynamically Loaded'    
                },
                {
                    title: 'Carta 6',
                    text: 'Dynamically Loaded'
                },
                {
                    title: 'Carta 7',
                    text: 'Dynamically Loaded'
                },
                {
                    title: 'Carta 8',
                    text: 'Dynamically Loaded'
                }
            ]
        }
    }


    render() {
        let vals = this.state.vals
        let count = 0
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

                    {vals.map(val => 
                        {
                        return( 
                        <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={productoImg} />
                            <Card.Body className="form">
                                <Card.Title>{val.title}</Card.Title>
                                <Card.Text>
                                   {val.text}
                                </Card.Text>
                                <ButtonGroup toggle className="mb-2">
                                    <ToggleButton type="checkbox" defaultChecked value="1">
                                    Ver producto
                                    </ToggleButton>
                                </ButtonGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                        )
                        })
                    }
                </Row>
                        
                </div>
            </div>
        );
    }
}
export default verInventario