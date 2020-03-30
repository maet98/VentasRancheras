import React from "react";
import pedidosImg from "../../images/pedido.svg";
import NavBar from "../ventas/NavBar";
import "../login/style.scss"
import { Table} from 'react-bootstrap';
import axios from "axios"

export class ListarPedidos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        console.log("Executing Request...")
        axios.get("http://152.0.255.93:3000/client/" + this.props.match.params.id)
        .then(
          res => {
            axios.get("http://152.0.255.93:3000/order/" + res.data.Customer[0].Id)
        .then(
          res => {
           this.setState({
               orders: res.data.QueryResponse.Estimate
           })
          }
        )
          }
        )
    }

    render() {
        let orders = this.state.orders
        let count = 0
        return (

            <div className="base-container" ref={this.props.containerRef}>
                <div>
                    <NavBar />
                </div>
        <div className="header">Ordenes Realizadas por {this.props.match.params.id}</div>
                <div className="content">
                    <div className="image">
                        <img className="centrado" src={pedidosImg} alt="desc" />
                    </div>
                </div>
                <Table responsive= "sm" bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Order ID</th>
      <th>Product/Service Name</th>
      <th>Product Amount</th>
      <th>Currency</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    {orders.map((order,index) => 
        {
            count++
            return( 
            <tr key={index}>
            <td>{count}</td>
            <td>{order.Id}</td>
            <td>{order.Line[0].SalesItemLineDetail.ItemRef.name}</td>
            <td>{order.TotalAmt}</td>
            <td>{order.CurrencyRef.value}</td>
            <td>{order.TxnDate}</td>
              </tr>       
                )
        })
    }
 
  </tbody>
</Table>
            </div>
            );
    }
}

export default ListarPedidos