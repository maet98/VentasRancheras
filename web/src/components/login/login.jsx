import React from 'react';
import loginImg from '../../images/login.svg';
import api from '../../api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Login extends React.Component {
	constructor(props) {
		super(props);

		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			email: '',
			password: '',
			type: 'Supervisor',
			errorFlag: 0,
		};
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

	onSubmit(e) {
		e.preventDefault();
		toast.configure();
		const newUser = {
			email: this.state.email,
			password: this.state.password,
			type: this.state.type,
		};

		console.log('Executing Request....');
		api
			.auth()
			.login(newUser)
			.then(res => {
				console.log(res.data);
				window.location = '/menu';
			})
			.catch(e => {
				console.log(e);
				toast.error('error logging in, please try again', {
					position: 'top-center',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: false,
				});
			});
		this.setState({
			email: '',
			password: '',
		});
	}

	render() {
		return (
			<div className='base-container' ref={this.props.containerRef}>
				<form onSubmit={this.onSubmit}>
					<div className='header'>Login</div>
					<div className='content'>
						<div className='image'>
							<img src={loginImg} alt='desc' />
						</div>
						<div className='form'>
							<div className='form-group'>
								<label htmlFor='Email'>Email</label>
								<input
									type='text'
									name='Email'
									placeholder='Email'
									value={this.state.email}
									onChange={this.onChangeEmail}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='password'>Password</label>
								<input
									type='password'
									name='password'
									placeholder='password'
									value={this.state.password}
									onChange={this.onChangePassword}
								/>
							</div>
						</div>
					</div>
					<div className='footer'>
						<button type='submit' className='btn'>
							Login
						</button>
					</div>
				</form>
			</div>
		);
	}
}
