import React from "react";
import loginImg from "../../images/login.svg";

export class Login extends React.Component {
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
    console.log("testing");
    window.location = "/menu"
  }
  handleClick(e) {
    e.preventDefault();
    window.location = "/menu"
  }

  render() {
    return (

      <div className="base-container" ref={this.props.containerRef}>
        <form onSubmit={this.onSubmit}>
          <div className="header">Login</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input type="text" name="Email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Login
          </button> {' '}
            <button type="button" className="btn" onClick={this.handleClick}>
              Menu
          </button>
          </div>
        </form>
      </div>
    );
  }
}