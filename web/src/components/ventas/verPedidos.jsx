import React from 'react';
import pedidoImg from '../../images/pedido.svg';
import '../login/style.scss';
import api from '../../api/api';

export class VerPedido extends React.Component {
	constructor(props) {
		super(props);

		this.getSelectValue = this.getSelectValue.bind(this);
		this.onChangeSelectedName = this.onChangeSelectedName.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			names: [],
			selectedName: '',
		};
	}

	componentDidMount() {
		api
			.client()
			.getAll()
			.then(res => {
				this.setState({
					names: res.data,
				});
			});
	}

	onChangeSelectedName(e) {
		this.setState({
			selectedName: e.target.value,
		});
	}
	getSelectValue(name) {
		return toString(name);
	}

	onSubmit(e) {
		e.preventDefault();
		api
			.client()
			.filterByName(this.state.selectedName)
			.then(res => {
				console.log(res);
				window.location = '/pedidos/' + res.data.Customer[0].Id;
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		let names = this.state.names;
		return (
			<div className='base-container' ref={this.props.containerRef}>
				<div className='header'>Ver Pedidos</div>
				<div className='content'>
					<div className='image'>
						<img className='centrado' src={pedidoImg} alt='desc' />
					</div>
					<div className='form'>
						<div className='form-group'>
							<label htmlFor='inputName'>Cliente</label>
							<select
								type='text'
								id='inputName'
								className='form-control'
								value={this.state.selectedName}
								onChange={this.onChangeSelectedName}>
								<option value='' hidden>
									Elegir Cliente
								</option>
								{names.map((name, index) => {
									return (
										<option key={index} value={name.DisplayName}>
											{name.DisplayName}
										</option>
									);
								})}
							</select>
						</div>
						<div className='form-group'>
							<button type='submit' className='btn' onClick={this.onSubmit}>
								Confirmar
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default VerPedido;
