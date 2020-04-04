import React from "react";
import rutasImg from "../../images/ruta.svg";
import "../login/style.scss";
import api from "../../api/api";

export class ProgramarRutas extends React.Component {
	constructor(props) {
		super(props);
		this.onChangeSelectedName = this.onChangeSelectedName.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			selectedName: "",
			names: [],
		};
	}

	componentDidMount() {
		api
			.employee()
			.getAll()
			.then((res) => {
				this.setState({
					names: res.data.Employee,
				});
			});
	}

	onChangeSelectedName(e) {
		this.setState({
			selectedName: e.target.value,
		});
	}

	handleClick(e) {
		e.preventDefault();

		const id = this.state.selectedName;

		api
			.employee()
			.getById(id)
			.then((res) => {
				if (res.data.type === "Repartidor") {
					window.location = "/verOrdenes/" + id;
				} else if (res.data.type === "Vendedor") {
					window.location = "/verClientes/" + id;
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		let names = this.state.names;
		return (
			<div className="base-container" ref={this.props.containerRef}>
				<div className="header">Programar Rutas</div>
				<div className="content">
					<div className="image">
						<img className="centrado" src={rutasImg} alt="desc" />
					</div>
					<div className="form">
						<div className="form-group">
							<label htmlFor="delivery">Nombre del Empleado</label>
							<select
								type="text"
								id="inputName"
								className="form-control"
								value={this.state.selectedName}
								onChange={this.onChangeSelectedName}
							>
								<option value="" hidden>
									Elegir Empleado
								</option>
								{names.map((name, index) => {
									return (
										<option key={index} value={name.Id}>
											{name.GivenName}
										</option>
									);
								})}
							</select>
						</div>
						<div className="form-group">
							<button type="button" className="btn" onClick={this.handleClick}>
								Continuar
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default ProgramarRutas;
