import React from "react";
import rutasImg from "../../images/ruta.svg";
import NavBar from "../ventas/NavBar";
import "../login/style.scss"
import axios from "axios"

export class ProgramarRutas extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      name: '',
      id: '',
      type: ''
    }
  }

  onChangeName(e) {
  this.setState({
    name: e.target.value
  })
  
  }

handleClick(e) {
  e.preventDefault()

  const name = this.state.name
  console.log("Executing Request....")
  axios.get("http://152.0.255.93:3000/employee/name/" + name)
  .then(
    res => {
      axios.get("http://152.0.255.93:3000/employee/" + res.data.Employee[0].Id)
  .then(
    res => {
      if(res.data.type == "Repartidor"){
         window.location = '/verOrdenes/' + name
       }
       else if(res.data.type == "Vendedor") {
         window.location = '/verClientes/' + name
       }
    }
  )
    }
  )

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