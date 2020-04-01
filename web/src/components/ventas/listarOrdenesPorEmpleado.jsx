import React from "react"
import axios from "axios"
import {Table} from "react-bootstrap"
import NavBar from "./NavBar"
import pedidosImg from "../../images/pedido.svg"


export class listarOrdenesPorEmpleado extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
       let id = this.props.match.params.id
       console.log(id)

       axios.get('http://152.0.49.179:3000/order').then(
           res =>{
            let arr1 = res.data
            let arr2 = arr1.filter(function(element) {
                return element.PrivateNote === id
              })
           this.setState({
               orders: arr2
           })
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
        <div className="header">Ordenes Encargadas por el empleado de id: {this.props.match.params.id}</div>
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
      <th>Order Amount</th>
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

export default listarOrdenesPorEmpleado