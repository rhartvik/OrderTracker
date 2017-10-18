import React, { Component } from 'react';
import logo from './shopping-cart.svg';
import './App.css';
import Menu from './Components/Menu'

class App extends Component {
  render() {

    const staticMenuItems = [
      {
        name: 'burger',
        id: 1,
        price: 14.56,
        quantity: 0,
        imageUrl: 'https://www.burger21.com/wp-content/themes/burger21/images/bacon-cheesy-burger.png'
      },
      {
        name: 'fries',
        id: 2,
        price: 5.34,
        quantity: 0,
        imageUrl: 'http://recipes.timesofindia.com/photo/54659021.cms'
      },
      {
        name: 'salad',
        id: 3,
        price: 11.73,
        quantity: 1,
        imageUrl: 'http://www.simplyrecipes.com/wp-content/uploads/2016/07/2016-08-12-BLT-Salad-3-600x400.jpg'
      },
      {
        name: 'energy bar',
        id: 4,
        price: 4.56,
        quantity: 0,
        imageUrl: 'https://static1.squarespace.com/static/54c5468de4b039d9590f4251/555002c2e4b03722d38a9b06/55748d86e4b0c6a58c74878f/1433701767528/small+Energy.jpg?format=500w'
      }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Store</h1>
        </header>
        <Menu items={staticMenuItems} />
      </div>
    );
  }
}

export default App;
