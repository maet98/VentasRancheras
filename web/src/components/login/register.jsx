import React, { Component } from "react";
import loginImg from "../../images/login.svg";
import Navbar from "../ventas/NavBar"
import "../login/style.scss"


export class Register extends React.Component {
  constructor(props) {
    super(props)

    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {

      email: '',
      password: '',
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
    e.preventDefault();
    console.log("hola");
  }

  render() {
    return (

      <div className="base-container" ref={this.props.containerRef}>
        <div><Navbar /></div>
        <form onSubmit={this.onSubmit}>
          <div className="header">Registrar Empleado</div>
          <div className="content">
            <div className="image">
              <img className="centrado" src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input type="text" name="Email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <div className="form-group col-md-4">
                  <label htmlFor="inputCargo">Cargo</label>
                  <select type="text" id="inputCargo" className="form-control">
                    <option value="" hidden>Elegir cargo</option>
                    <option value="repartidor">Repartidor</option>
                    <option value="vendedor">Vendedor</option>
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
export default Register