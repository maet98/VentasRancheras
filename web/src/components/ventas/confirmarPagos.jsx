import React from 'react';
import pagosImg from '../../images/pagos.svg';
import '../login/style.scss';
import api from '../../api/api';
import { Table, Button } from 'react-bootstrap';

export class ConfirmarPagos extends React.Component {
	constructor(props) {
		super(props);
		this.ReRoute = this.ReRoute.bind(this);

		this.state = {
			Employees: [],
		};
	}

	componentDidMount() {
		console.log('Executing Request...');
		api
			.employee()
			.getAll()
			.then(res => {
				this.setState({
					Employees: res.data,
				});
			});
	}

	ReRoute(e, ID) {
		e.preventDefault();
		window.location = '/Desempeño/' + ID;
	}

	render() {
		let Employee = this.state.Employees;
		let count = 0;
		return (
			<div className='base-container' ref={this.props.containerRef}>
				<div className='header'>
					Listado de Vendedores{this.props.match.params.id}
				</div>
				<div className='content'>
					<div className='image'>
						<img className='centrado' src={pagosImg} alt='desc' />
					</div>
				</div>
				<Table responsive='sm' bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Employee ID</th>
							<th>Name</th>
							<th>Perfomance</th>
						</tr>
					</thead>
					<tbody>
						{Employee.length > 0 ? (
							Employee.map((Employee, index) => {
								count++;
								return (
									<tr key={index}>
										<td>{count}</td>
										<td>{Employee.Id}</td>
										<td>{Employee.GivenName}</td>
										<td>
											<Button
												variant='link'
												onClick={e => this.ReRoute(e, Employee.Id)}>
												Ver Desempeño
											</Button>
										</td>
									</tr>
								);
							})
						) : (
							<p>No hay empleados </p>
						)}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default ConfirmarPagos;
