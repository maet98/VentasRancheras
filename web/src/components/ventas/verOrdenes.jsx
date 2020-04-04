import React from "react";
import rutasImg from "../../images/ruta.svg";
import paqueteImg from "../../images/paquete.svg";
import "../login/style.scss";
import { Card, ListGroup, Col, Row, Button } from "react-bootstrap";

export class verRutas extends React.Component {
	constructor(props) {
		super(props);
		this.return = this.return.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			vals: ["Dynamically", "Loading", "From Array 1"],
			vals2: ["Dynamically", "Loading", "From Array 2"],
		};
	}

	return(e) {
		e.preventDefault();
		window.location = "/menu";
	}

	handleClick(e) {
		e.preventDefault();
	}

	render() {
		let vals = this.state.vals;
		let vals2 = this.state.vals2;
		return (
			<div className="base-container" ref={this.props.containerRef}>
				<div className="header">
					Asignar Ordenes al cliente: {this.props.match.params.id}
				</div>
				<div className="content">
					<div className="image">
						<img className="centrado" src={rutasImg} alt="desc" />
					</div>
				</div>

				<div className="classCard">
					<Row xs="6">
						<Col>
							<Card style={{ width: "20rem" }}>
								<Card.Img variant="top" src={paqueteImg} alt="desc" />
								<Card.Body className="form">
									<Card.Title>Ordenes Por Asignar </Card.Title>
									<ListGroup>
										{vals.map((val, index) => {
											return (
												<ListGroup.Item action key={index}>
													{val}
												</ListGroup.Item>
											);
										})}
									</ListGroup>
								</Card.Body>
							</Card>
						</Col>

						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>
						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>
						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>
						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>
						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>
						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>
						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>
						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>
						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<Button type="submit" onClick={this.handleClick}>
								Asignar
							</Button>
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>
						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>
						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>
						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>
						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>
						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>
						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>
						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>
						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>
						<Col>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Col>

						<Col>
							<br />
							<Card style={{ width: "20rem" }}>
								<Card.Img variant="top" src={paqueteImg} alt="desc" />
								<Card.Body className="form">
									<Card.Title>Ordenes Asignadas al Repartidor</Card.Title>
									<ListGroup>
										{vals2.map((val, index) => {
											return (
												<ListGroup.Item action key={index}>
													{val}
												</ListGroup.Item>
											);
										})}
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
export default verRutas;
