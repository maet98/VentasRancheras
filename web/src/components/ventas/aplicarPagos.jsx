import React from "react";
import cargoImg from "../../cargo.svg";

export class AplicarCargo extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (

      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Aplicar Cargos</div>
        <div className="content">
          <div className="image">
            <img src={cargoImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="cliente">Nombre del Cliente</label>
              <input type="text" name="cliente" placeholder="cliente" />
            </div>
            
            <div className="form-group">
              <label htmlFor="fecha">Fecha</label>
              <input type="text" name="fecha" placeholder="Fecha" />
            </div>
            
            <div className="form-group">
              <label htmlFor="numero">Numero de Orden</label>
              <input type="text" name="numero" placeholder="Numero de Orden" />
            </div>

            <div className="form-group">
              <label htmlFor="pagar">Monto a Pagar</label>
              <input type="text" name="pagar" placeholder="Monto a pagar" />
            </div>
          </div>
        </div>
     
      </div>
    );
  }
}
