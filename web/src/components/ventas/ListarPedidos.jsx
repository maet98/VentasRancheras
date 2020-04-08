import React from 'react';
import pedidosImg from '../../images/pedido.svg';
import '../login/style.scss';
import { Table } from 'react-bootstrap';
import api from '../../api/api';

export class ListarPedidos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: [],
			Balance: 0,
		};
	}

	componentDidMount() {
		console.log('Executing Request...');
		const id = this.props.match.params.id;
		api
			.client()
			.getById(id)
			.then(res => {
				this.setState({
					Balance: res.data.Balance,
				});
			});
		api
			.order()
			.getByCustomerId(id)
			.then(res => {
				let arr2;
				let arr1 = res.data.QueryResponse.Invoice;
				if (res.data.QueryResponse.Invoice != undefined) {
					arr2 = arr1.filter(function (element) {
						return element.CustomerRef.value === id;
					});
				} else {
					arr2 = [];
				}
				this.setState({
					orders: arr2,
				});
			});
	}

	render() {
		let orders = this.state.orders;
		let count = 0;
		return (
			<div className='base-container' ref={this.props.containerRef}>
				<div className='header'>
					Ordenes Realizadas por {this.props.match.params.id}
				</div>
				<div className='content'>
					<div className='image'>
						<img className='centrado' src={pedidosImg} alt='desc' />
						<div className='subheader'>
							Balance Pendiente: {this.state.Balance}
						</div>
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
							<p>No tiene pedidos</p>
						)}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default ListarPedidos;
