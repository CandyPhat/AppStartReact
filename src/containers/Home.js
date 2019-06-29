import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Monitor from '../components/monitor/Monitor';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { products: "" }
  }
  componentDidMount() {
    /*1*/
    // this.setState({
    //   products: [
    //     { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.png" },
    //     { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.png" },
    //     { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.png" },
    //     { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.png" },
    //     { productId: 5, productName: "เค้ก", unitPrice: "180", thumbnail: "/images/product/5.png" },
    //     { productId: 6, productName: "กาแฟ เฮลตี้ฟู๊ด", unitPrice: "250", thumbnail: "/images/product/6.png" }

    //   ]
    // })
    /*2*/
    // fetch("http://localhost:3001/products",{ method: "GET"})
    // .then( res => res.json())
    // .then(res => {this.setState({ products: res})});
    /*3*/
    axios.get("http://localhost:3001/products").then( res => {
      console.log( res.data );
      
      this.setState({ products: res.data})
    })

  }
  render() {
    return (
      <div>
        <Header></Header>
        <Monitor products={this.state.products}></Monitor>
        <Footer company="Maruko" email="mal2uko0.o@gmail.com"></Footer>

      </div>
    );
  }
}

export default Home;
