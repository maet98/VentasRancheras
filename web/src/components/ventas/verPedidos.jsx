import React from "react";
import pedidoImg from "../../images/pedido.svg";
import NavBar from "../ventas/NavBar";
import "../login/style.scss"

export class VerPedido extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this)
    
    this.state = {
      name: ''
    }
  }

onChangeName(e) {
  this.setState({
    name: e.target.value
  })
}

onSubmit(e) {
  window.location = '/pedidos'
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
              <input type="text" 
              name="cliente" 
              placeholder="cliente"
              value={this.state.name}
              onChange={this.onChangeName} 
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn" onClick={this.onSubmit}>
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