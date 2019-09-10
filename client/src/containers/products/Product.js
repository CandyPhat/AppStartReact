import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductList from '../../components/products/ProductList';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux"
import { productFetch, productDelete } from "../../action"

class Product extends Component {
    constructor(props) {
        super(props);
        this.delProduct = this.delProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }
    componentDidMount() {
        this.props.productFetch();
    }

    delProduct(product) {
        this.props.productDelete(product.id);
    }
    editProduct(product) {
        this.props.history.push('products/edit/' + product.id);
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
                                onClick={() => this.props.history.push('products/add')}
                            >เพิ่ม</button>
                        </div>
                    </div>
                    <ProductList products={this.props.products}
                        onDelProduct={this.delProduct} onEditProduct={this.editProduct}></ProductList>
                </div>
                <Footer company="Maruko" email="mal2uko0.o@gmail.com"></Footer>
            </div>
        );
    }
}
function mapStateToProps({ products }) {
    return { products };
}
export default withRouter(connect(mapStateToProps, { productFetch, productDelete })(Product));