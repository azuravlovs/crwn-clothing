import React from 'react';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch} from 'react-router-dom'
import ShopPage from './pages/shop/Shop'
import Header from './componenets/header/Header'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;