import React from "react";
import pedidosImg from "../../images/pedido.svg";
import NavBar from "../ventas/NavBar";
import "../login/style.scss"
import { Table} from 'react-bootstrap';
import axios from "axios"
import url from "../../requestURL"

export class ListarPedidos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            Balance: 0
        }
    }

    componentDidMount() {
        console.log("Executing Request...")
        axios.get(url + "/client/name/" + this.props.match.params.id)
        .then(
          res => {
           
            let id = this.props.match.params.id
     
            axios.get(url + '/order').then(
                res =>{
                 let arr1 = res.data
                 let arr2 = arr1.filter(function(element) {
                     return element.CustomerRef.name === id
                   })
                this.setState({
                    orders: arr2
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
                        <div className="subheader">Balance Pendiente: {this.state.Balance}</div>
                    </div>
                </div>
                <Table responsive= "sm" bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Order ID</th>
      <th>Product/Service Name</th>
      <th>Order Amount</th>
      <th>Currency</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    {orders.length > 0 ? orders.map((order,index) => 
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
        }):
		<p>No tiene pedidos</p>
    }
 
  </tbody>
</Table>
            </div>
            );
    }
}

export default ListarPedidos
