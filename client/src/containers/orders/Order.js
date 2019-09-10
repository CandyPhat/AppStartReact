import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { connect } from "react-redux"
import { ordersFetch, orderDelete } from "../../action"

class Order extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.props.ordersFetch();
    }

    delOrder(Order) {
        this.props.orderDelete(Order.id);
    }
    showOrder(){
        return this.props.orders && this.props.orders.map(order => {
            const date = new Date(order.orderDate)
            console.log("order : ",order);
            
            return (
                <div key={order.id} className="col-md-3">
                    <hr/>
                    <p className="text-right">
                        <button 
                            className="btn btn-danger btn-sm title" 
                            onClick={() => this.delOrder(order)}
                        >X</button>
                    </p>
                    <h5> วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <ul>
                        {order.orders && order.orders.map( record => {
                            return (
                                <li key={record.product.id}>
                                    {record.product.productName} X {record.quantity} = { record.product.unitPrice * record.quantity}
                                </li>
                            )
                        })}
                    </ul>
                    <p className="title">
                        ยอดรวม {order.totalPrice}
                    </p>

                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className="container-fluid">
                    <h1>รายการสั่งซื้อ</h1>
                    <div className="row">
                        {this.showOrder()}
                    </div>
                </div>
                <Footer company="Maruko" email="mal2uko0.o@gmail.com"></Footer>
            </div>
        );
    }

}
function mapStateToProps( { orders }) {
    return { orders }
}
export default connect(mapStateToProps, { ordersFetch, orderDelete})(Order);
