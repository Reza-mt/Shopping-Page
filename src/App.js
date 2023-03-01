import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import Blogs from './components/Blogs';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div>
          <Switch>
            <Route path="/products/:id" component={Product} />
            <Route path='/Blogs' render={(props)=> <Blogs name='blogs' {...props} />} />
            <Route path='/Products' component={Products} />
            <Route path='/AboutUs' component={AboutUs} />
            <Route path='/' component={HomePage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;