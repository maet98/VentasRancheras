import React from "react";
import loginImg from "../../images/login.svg";
import axios from "axios"
import 'react-toastify/dist/reacttoastify.css';
import { ToastContainer, toast } from 'react-toastify';

export class Login extends React.Component {
  constructor(props) {
    super(props)

    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {

      email: '',
      password: '',
      type: 'Supervisor'
    }
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()
    const newUser = {
        email: this.state.email,
        password: this.state.password,
        type: this.state.type
    }

    console.log('Executing Request....')
    axios.post('http://152.0.49.179:3000/auth/login', newUser)
    .then(res => {
		this.notify();
        console.log(res.data)
        window.location ='/menu'
    });
    this.setState({
      email: '',
      password: ''
    })
  }
   

  render() {
    return (

      <div className="base-container" ref={this.props.containerRef}>
        <form onSubmit={this.onSubmit}>
          <div className="header">Login</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} alt="desc" />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input
                 type="text" 
                 name="Email" 
                 placeholder="Email" 
                 value = {this.state.email}
                 onChange = {this.onChangeEmail}
                 />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                 type="password"
                 name="password"
                 placeholder="password"
                 value = {this.state.password}
                 onChange = {this.onChangePassword} 
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Login
          </button>
          </div>
        </form>
      </div>
    );
  }
}
