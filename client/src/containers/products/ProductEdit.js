import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductForm from '../../components/products/ProductForm';
import { connect } from "react-redux";

class ProductEdit extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="container col-md-5">
                    <ProductForm></ProductForm>
                </div>
                <Footer company="Maruko" email="mal2uko0.o@gmail.com"></Footer>
            </div>
        );
    }
}

export default ProductEdit;