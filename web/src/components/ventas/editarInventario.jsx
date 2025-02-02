import React from "react";
import inventarioImg from "../../images/inventario.svg";
import "../login/style.scss";

export class EditarInventario extends React.Component {
	render() {
		return (
			<div className="base-container" ref={this.props.containerRef}>
				<div className="header">Editar Inventario</div>
				<div className="content">
					<div className="image">
						<img className="centrado" src={inventarioImg} alt="desc" />
					</div>
					<div className="form">
						<div className="form-group">
							<label htmlFor="numero">Numero de Orden </label>
							<input type="text" name="numero" placeholder="Numero de Orden" />
						</div>
						<div className="form-group">
							<button type="button" className="btn">
								Editar
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default EditarInventario;
