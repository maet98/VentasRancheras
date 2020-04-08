import React from 'react';
import { Table } from 'react-bootstrap';
import pedidosImg from '../../images/pedido.svg';
import api from '../../api/api';

export class listarOrdenesPorEmpleado extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: [],
		};
	}

	componentDidMount() {
		let id = this.props.match.params.id;
		api
			.order()
			.getById(id)
			.then(res => {
				console.log(res);
				this.setState({
					orders: res.data,
				});
			});
	}

	render() {
		let orders = this.state.orders;
		let count = 0;
		return (
			<div className='base-container' ref={this.props.containerRef}>
				<div className='header'>
					Ordenes Encargadas por el empleado de id: {this.props.match.params.id}
				</div>
				<div className='content'>
					<div className='image'>
						<img className='centrado' src={pedidosImg} alt='desc' />
					</div>
				</div>
				<Table responsive='sm' bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Order ID</th>
							<th>Product/Service Name</th>
							<th>Order Amount</th>
							<th>Currency</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{orders.length > 0 ? (
							orders.map((order, index) => {
								count++;
								return (
									<tr key={index}>
										<td>{count}</td>
										<td>{order.Id}</td>
										<td>{order.Line[0].SalesItemLineDetail.ItemRef.name}</td>
										<td>{order.TotalAmt}</td>
										<td>{order.CurrencyRef.value}</td>
										<td>{order.TxnDate}</td>
									</tr>
								);
							})
						) : (
							<p>No hay ordernes.</p>
						)}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default listarOrdenesPorEmpleado;
