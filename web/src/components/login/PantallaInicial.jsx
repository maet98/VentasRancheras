import React from "react";
import "./PantallaInicial.scss";
<<<<<<< HEAD
import { Login } from "./index";
=======
import { Login, Register } from "./index";
>>>>>>> d4f4ce7c075da3487509b0c1dc5ec465e900ad77
import Menu from "../ventas/menu";


class PantallaInicial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true 
    }; 
  }
 
  componentDidMount() {
    //Add .right by default 
    this.rightSide.classList.add("right");
  }
 
  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
<<<<<<< HEAD
    const current = isLogginActive ? "Login" : "Login";
    const currentActive = isLogginActive ? "login" : "login";
=======
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
>>>>>>> d4f4ce7c075da3487509b0c1dc5ec465e900ad77
    return (
      <div className="PantllaInicial">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
<<<<<<< HEAD
              <Login containerRef={ref => (this.current = ref)} />
=======
              <Register containerRef={ref => (this.current = ref)} />
>>>>>>> d4f4ce7c075da3487509b0c1dc5ec465e900ad77
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
<<<<<<< HEAD
=======
            onClick={this.changeState.bind(this)}
>>>>>>> d4f4ce7c075da3487509b0c1dc5ec465e900ad77
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default PantallaInicial;
