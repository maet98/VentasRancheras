import React from "react";
import pedidosImg from "../../images/pedido.svg";
import NavBar from "../ventas/NavBar";
import "../login/style.scss"
import { Table} from 'react-bootstrap';

export class ListarPedidos extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div className="base-container" ref={this.props.containerRef}>
                <div>
                    <NavBar />
                </div>
        <div className="header">Ordenes Realizadas por {}</div>
                <div className="content">
                    <div className="image">
                        <img className="centrado" src={pedidosImg} />
                    </div>
                </div>
                <Table responsive= "sm" bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</Table>

            </div>
            );
    }
}

export default ListarPedidos