import React from "react";
import ordenImg from "../../images/orden.svg";
import "../login/style.scss";

export class ProgramarOrden extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		window.location = "/verRutas";
	}

	render() {
		return (
			<div className="base-container" ref={this.props.containerRef}>
				<div className="header">Programar Orden</div>
				<div className="content">
					<div className="image">
						<img className="centrado" src={ordenImg} alt="desc" />
					</div>
					<div className="form">
						<div className="form-group">
							<label htmlFor="vendedor">Nombre del Vendedor </label>
							<input type="text" name="vendedor" placeholder="Nombre del Vendedor" />
						</div>
						<div className="form-group">
							<button type="button" className="btn" onClick={this.handleClick}>
								Programar
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default ProgramarOrden;
