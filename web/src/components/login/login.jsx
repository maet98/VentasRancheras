import React from "react";
import loginImg from "../../login.svg";

export class Login extends React.Component {
  constructor(props) {
    super(props)

        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
<<<<<<< HEAD

            email: '',
            password: '',
  }
}
onChangeEmail(e) {
  this.setState ({
      email: e.target.value
  })
}
onChangePassword(e) {
  this.setState ({
      password: e.target.value
  })
}
onSubmit(e) {
 console.log("testing");
 window.location = "/menu"
  }
=======

            email: '',
            password: '',
  }
}
onChangeEmail(e) {
  this.setState ({
      email: e.target.value
  })
}
onChangePassword(e) {
  this.setState ({
      password: e.target.value
  })
}


onSubmit(e) {
 console.log("testing");
 window.location = "/menu"
  }

>>>>>>> d4f4ce7c075da3487509b0c1dc5ec465e900ad77
handleClick(e) {
  e.preventDefault();
  window.location = "/menu"
}
<<<<<<< HEAD
=======

>>>>>>> d4f4ce7c075da3487509b0c1dc5ec465e900ad77

  render() {
    return (

      <div className="base-container" ref={this.props.containerRef}>
        <form onSubmit ={this.onSubmit}>
        <div className="header">Login</div>
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
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Login
<<<<<<< HEAD
          </button> {' '}
=======
          </button>
>>>>>>> d4f4ce7c075da3487509b0c1dc5ec465e900ad77
          <button type="button" className="btn" onClick = {this.handleClick}>
            Menu
          </button>
        </div>
        </form>
      </div>
    );
  }
}
