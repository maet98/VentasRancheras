import React from "react";
import rutasImg from "../../images/ruta.svg";
import NavBar from "../ventas/NavBar";
import "../login/style.scss"
import axios from "axios"

export class ProgramarRutas extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      name: ''
    }
  }

  onChangeName(e) {
  this.setState({
    name: e.target.value
  })
  }

handleClick() {
  const user = this.state.name

  
}


  render() {
    return (

      <div className="base-container" ref={this.props.containerRef}>
           <div>
          <NavBar />
        </div>
        <div className="header">Programar Rutas</div>
        <div className="content">
          <div className="image">
            <img className="centrado" src={rutasImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="delivery">Nombre del Empleado</label>
              <input type="text" 
              name="Empleado" 
              placeholder="Nombre del Empleado"
               value = {this.state.name}
               onChange = {this.onChangeName} />
            </div>
            <div className = "form-group">
            <button type="button" className="btn" onClick ={this.handleClick}>
              Continuar
          </button>
            </div>
          </div>
        </div>
     
      </div>
    );
  }
}
export default ProgramarRutas