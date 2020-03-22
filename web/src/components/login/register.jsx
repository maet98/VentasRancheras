import React from "react";
import loginImg from "../../login.svg";
import Navbar from "../ventas/NavBar"
import {Dropdown,DropdownButton} from "react-bootstrap";

 
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
                <input type="text" name="username" placeholder="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" />
              </div>
              <div className = "form-group">
                <label htmlFor="Cargo">Cargo</label>
                <select>
                    <option selected value="Vendedor">Vendedor</option>
                    <option value="Repartidor">Repartidor</option>
                </select>
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Registrar
          </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Register