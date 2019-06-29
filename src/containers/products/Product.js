import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductList from '../../components/products/ProductList';
import axios from 'axios';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { products: null };
        this.delProduct = this.delProduct.bind(this);
    }
    componentDidMount() {
        axios.get("http://localhost:3001/products").then(res => {
            this.setState({ products: res.data });
        });
    }

    delProduct(products) {
        axios.delete("http://localhost:3001/products/" + products.id)
            .then(res => {
                axios.get("http://localhost:3001/products").then(res => {
                    this.setState({ products: res.data });
                });
            });
    }
    render() {
        return (
            <div>
                <Header></Header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>สินค้า</h1>
                        </div>
                        <div className="col-md-6">
                        <button 
                            className="btn btn-success btn-sm title float-right" 
                        >เพิ่ม</button>
                        </div>
                    </div>
                    <ProductList products={this.state.products} 
                    onDelProduct={this.delProduct}></ProductList>
                </div>
                <Footer company="Maruko" email="mal2uko0.o@gmail.com"></Footer>
            </div>
        );
    }
}
export default Product;