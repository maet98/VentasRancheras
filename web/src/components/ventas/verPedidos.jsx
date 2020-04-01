import React from "react";
import pedidoImg from "../../images/pedido.svg";
import NavBar from "../ventas/NavBar";
import "../login/style.scss"
import axios from "axios"

export class VerPedido extends React.Component {
  constructor(props) {
    super(props);

    this.getSelectValue = this.getSelectValue.bind(this)
    this.onChangeSelectedName = this.onChangeSelectedName.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    
    this.state = {
      names: [],
      selectedName: ''
    }
  }

componentDidMount() {
axios.get('http://152.0.49.179:3000/client/').then(res => {
  this.setState({
    names: res.data
  })
}
)
}

onChangeSelectedName(e) {
  this.setState({
    selectedName: e.target.value
  })
}
getSelectValue(name) {
  return toString(name);
}

onSubmit(e) {
  e.preventDefault()
  window.location = '/pedidos/' + this.state.selectedName
}

  render() {
    let names = this.state.names
    return (

      <div className="base-container" ref={this.props.containerRef}>
        <div>
          <NavBar />
        </div>
        <div className="header">Ver Pedidos</div>
        <div className="content">
          <div className="image">
            <img className="centrado" src={pedidoImg} alt="desc" />
          </div>
          <div className="form">
            <div className="form-group">
            <label htmlFor="inputName">Cliente</label>
                <select type="text" 
                id="inputName" 
                className="form-control"
                value = {this.state.selectedName}
                onChange = {this.onChangeSelectedName}
                  >
                    <option value="" hidden>Elegir Cliente</option>
                    {
                    names.map((name, index) => 
                        {
                        return(
                        <option key={index} value={name.DisplayName}>{name.DisplayName}</option>
                         ) 
                        })
                      }
  
                  </select>
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