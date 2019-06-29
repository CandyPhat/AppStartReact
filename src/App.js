import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Order from './containers/orders/Order';
import Product from './containers/products/Product';

class App extends Component {

  renderRouter(){
    return(
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/orders" component={Order}></Route>
        <Route exact path="/products" component={Product}></Route>
      </Switch>
    );
  }

  render() {
    return (
      <BrowserRouter>{ this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;
