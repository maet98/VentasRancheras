import React from "react";
import rutasImg from "../../images/ruta.svg";
import NavBar from "../ventas/NavBar";
import "../login/style.scss"

export class ProgramarRutas extends React.Component {
  constructor(props) {
    super(props);
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
              <label htmlFor="delivery">Nombre del Delivery </label>
              <input type="text" name="delivery" placeholder="Nombre del Delivery" />
            </div>
            <div className = "form-group">
            <button type="button" className="btn">
              Programar
          </button>
            </div>
          </div>
        </div>
     
      </div>
    );
  }
}
export default ProgramarRutas