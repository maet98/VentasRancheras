import React, { Component } from "react";
import loginImg from "../../login.svg";
import Navbar from "../ventas/NavBar"


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
    console.log("test");
  }

  render() {
    return (

      <div className="base-container" ref={this.props.containerRef}>
        <div><Navbar /></div>
        <form onSubmit={this.onSubmit}>
          <div className="header">Registrar Empleado</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <div class="form-group col-md-4">
                  <label for="inputCargo">Cargo</label>
                  <select type="text" id="inputCargo" class="form-control" placeholder="Cargo">
                    <option value="" disabled selected hidden>Cargo</option>
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