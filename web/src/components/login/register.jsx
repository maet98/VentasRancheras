import React from "react";
import loginImg from "../../images/login.svg";
import "../login/style.scss";
import api from "../../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Register extends React.Component {
	constructor(props) {
		super(props);

		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onChangeFirstName = this.onChangeFirstName.bind(this);
		this.onChangeLastName = this.onChangeLastName.bind(this);
		this.onChangeType = this.onChangeType.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			type: "",
		};
	}

	onChangeFirstName(e) {
		this.setState({
			firstName: e.target.value,
		});
	}
	onChangeLastName(e) {
		this.setState({
			lastName: e.target.value,
		});
	}
	onChangeEmail(e) {
		this.setState({
			email: e.target.value,
		});
	}
	onChangePassword(e) {
		this.setState({
			password: e.target.value,
		});
	}

	onChangeType(e) {
		this.setState({
			type: e.target.value,
		});
	}


	onSubmit(e) {
		toast.configure()
		e.preventDefault();
		const newUser = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password,
			type: this.state.type,
		};

		console.log("Executing Request....");
		api
			.employee()
			.register(newUser)
			.then((res) => {
				toast.success("Empleado Registrado", {
					position: 'top-center',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: false,
				});
			});

		this.setState({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			type: "",
		});
	}

	render() {
		return (
			<div className="base-container" ref={this.props.containerRef}>
				<form onSubmit={this.onSubmit}>
					<div className="header">Registrar Empleado</div>
					<div className="content">
						<div className="image">
							<img className="centrado" src={loginImg} alt="desc" />
						</div>
						<div className="form">
							<div className="form-group">
								<label htmlFor="firstName">Nombre</label>
								<input
									type="text"
									name="firstName"
									placeholder="Nombre"
									value={this.state.firstName}
									onChange={this.onChangeFirstName}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="lastName">Apellido</label>
								<input
									type="text"
									name="lastName"
									placeholder="Apellido"
									value={this.state.lastName}
									onChange={this.onChangeLastName}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="Email">Email</label>
								<input
									type="text"
									name="Email"
									placeholder="Email"
									value={this.state.email}
									onChange={this.onChangeEmail}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									name="password"
									placeholder="Password"
									value={this.state.password}
									onChange={this.onChangePassword}
								/>
							</div>
							<div className="form-group">
								<div className="form-group col-md-4">
									<label htmlFor="inputCargo">Cargo</label>
									<select
										type="text"
										id="inputCargo"
										className="form-control"
										value={this.state.type}
										onChange={this.onChangeType}
									>
										<option value="" hidden>
											Elegir cargo
										</option>
										<option value="Repartidor">Repartidor</option>
										<option value="Vendedor">Vendedor</option>
									</select>
								</div>
							</div>
							<div className="form-group">
								<button type="submit" className="btn">
									Registrar
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
export default Register;
