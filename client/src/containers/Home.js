import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Monitor from '../components/monitor/Monitor';
import { connect } from "react-redux";
import { productFetch } from "../action"

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.productFetch();
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Monitor products={this.props.products}></Monitor>
        <Footer company="Maruko" email="mal2uko0.o@gmail.com"></Footer>

      </div>
    );
  }
}
function mapStateToProps({ products }) {
  return { products };

}
export default connect(mapStateToProps, { productFetch })(Home);
