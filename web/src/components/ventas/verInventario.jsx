import React from "react";
import inventarioImg from "../../images/inventario2.svg";
import productoImg from "../../images/producto.svg";
import "../login/style.scss";
import { Card, Col, Row } from "react-bootstrap";
import api from "../../api/api";

export class verInventario extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			vals: [],
		};
	}

	componentDidMount() {
		console.log("Executing Request...");
		api
			.product()
			.getAll()
			.then((res) => {
				this.setState({ vals: res.data.Item });
			});
	}

	render() {
		let vals = this.state.vals;
		return (
			<div className="base-container" ref={this.props.containerRef}>
				<div className="header">Inventario</div>
				<div className="content">
					<div className="image">
						<img className="centrado" src={inventarioImg} alt="desc" />
					</div>
				</div>

				<div className="classCard">
					<Row xs="2">
						{vals.map((val, index) => {
							return (
								<Col key={index}>
									<Card style={{ width: "18rem" }}>
										<Card.Img variant="top" src={productoImg} />
										<Card.Body className="form">
											<Card.Title>{val.Name}</Card.Title>
											<Card.Subtitle>Unit Price: {val.UnitPrice}</Card.Subtitle>
											<Card.Text>{val.Description}</Card.Text>
										</Card.Body>
									</Card>
								</Col>
							);
						})}
					</Row>
				</div>
			</div>
		);
	}
}
export default verInventario;
