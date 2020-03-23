import React from "react";
import pedidoImg from "../../images/pedido.svg";
import NavBar from "../ventas/NavBar";
import "../login/style.scss"

export class VerPedido extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (

      <div className="base-container" ref={this.props.containerRef}>
        <div>
          <NavBar />
        </div>
        <div className="header">Ver Pedidos</div>
        <div className="content">
          <div className="image">
            <img className="centrado" src={pedidoImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="cliente">Cliente</label>
              <input type="text" name="cliente" placeholder="cliente" />
            </div>

            <div className="form-group">
              <label htmlFor="numero">Numero de Orden</label>
              <input type="text" name="numero" placeholder="Numero de Orden" />
            </div>
            <div className="form-group">
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
export default VerPedido