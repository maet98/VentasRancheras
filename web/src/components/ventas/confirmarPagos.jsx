import React from "react";
import pagosImg from "../../pagos.svg";
import NavBar from "../ventas/NavBar";
import "../login/style.scss"

export class ConfirmarPagos extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (


      <div className="base-container" ref={this.props.containerRef}>
        <div>
          <NavBar />
        </div>
        <div className="header">Confirmar Pagos</div>
        <div className="content">
          <div className="image">
            <img class="centrado" src={pagosImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="cliente">Nombre del Cliente</label>
              <input type="text" name="cliente" placeholder="Nombre del Cliente" />
            </div>

            <div className="form-group">
              <label htmlFor="numero">Numero de Orden </label>
              <input type="text" name="numero" placeholder="Numero de Orden" />
            </div>

            <div className="form-group">
              <label htmlFor="fecha">Fecha</label>
              <input type="text" name="fecha" placeholder="Fecha" />
            </div>
            <div className = "form-group">
            <button type="button" className="btn">
              Confirmar
          </button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default ConfirmarPagos