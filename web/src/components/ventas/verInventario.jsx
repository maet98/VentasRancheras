import React from "react";
import inventarioImg from "../../images/inventario2.svg";
import productoImg from "../../images/producto.svg";
import NavBar from "../ventas/NavBar";
import "../login/style.scss"
import axios from "axios"
import { Card, ButtonGroup, ToggleButton, Col, Row } from 'react-bootstrap';

export class verInventario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vals: []
        }
    }

    componentDidMount(){
        console.log("Executing Request...")
        axios.get('http://152.0.255.93:3000/product/').then(res => {
            this.setState({vals: res.data.Item})
        })
    }

    render() {
        let vals = this.state.vals
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

                    {vals.map((val, index) => 
                        {
                        return( 
                        <Col key={index}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={productoImg} />
                            <Card.Body className="form">
                                <Card.Title>{val.Name}</Card.Title>
                                <Card.Text>
                                   {val.Description}
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