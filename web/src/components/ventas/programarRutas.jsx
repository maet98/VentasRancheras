import React from "react";
<<<<<<< HEAD
import rutasImg from "../../ruta.svg";
=======
import rutasImg from "../../logo.svg";
>>>>>>> d4f4ce7c075da3487509b0c1dc5ec465e900ad77

export class ProgramarRutas extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (

      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Programar Rutas</div>
        <div className="content">
          <div className="image">
            <img src={rutasImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="delivery">Nombre del Delivery </label>
              <input type="text" name="delivery" placeholder="Nombre del Delivery" />
            </div>
            
            <div className="form-group">
              <label htmlFor="fecha">Fecha</label>
              <input type="text" name="fecha" placeholder="Fecha" />
            </div>

            <div className="form-group">
              <label htmlFor="direccion">Direccion</label>
              <input type="text" name="direccion" placeholder="Direccion" />
            </div>
          </div>
        </div>
     
      </div>
    );
  }
}
export default ProgramarRutas