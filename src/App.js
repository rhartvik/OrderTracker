import React, { Component } from 'react';
import logo from './shopping-cart.svg';
import './App.css';
import Menu from './Components/Menu'

class App extends Component {

  state = {
    menuItems: []
  }

  constructor(props) {
    super(props);

    const staticMenuItems = [
      {
        name: 'Burger',
        id: 1,
        price: 14.56,
        quantity: 0,
        imageUrl: 'https://www.burger21.com/wp-content/themes/burger21/images/bacon-cheesy-burger.png'
      },
      {
        name: 'Fries',
        id: 2,
        price: 5.34,
        quantity: 0,
        imageUrl: 'http://recipes.timesofindia.com/photo/54659021.cms'
      },
      {
        name: 'Salad',
        id: 3,
        price: 11.73,
        quantity: 1,
        imageUrl: 'http://www.simplyrecipes.com/wp-content/uploads/2016/07/2016-08-12-BLT-Salad-3-600x400.jpg'
      },
      {
        name: 'Energy Bar',
        id: 4,
        price: 4.56,
        quantity: 0,
        imageUrl: 'https://static1.squarespace.com/static/54c5468de4b039d9590f4251/555002c2e4b03722d38a9b06/55748d86e4b0c6a58c74878f/1433701767528/small+Energy.jpg?format=500w'
      }
    ];

    this.state = { menuItems: staticMenuItems }
  }

  addItemToOrder = (itemId) => {
    const updatedItems = this.state.menuItems.map((item,index) => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item);
    this.setState((prevState, props) => { return { menuItems: updatedItems } });
  }

  removeItemFromOrder = (itemId) => {
    const updatedItems = this.state.menuItems.map((item,index) => item.id === itemId 
      ? { ...item, quantity: item.quantity === 0 ? 0 : item.quantity - 1 } 
      : item);
    this.setState((prevState, props) => { return { menuItems: updatedItems } });
  }

  increaseQuantity = () => {
    this.setState((prevState, props) => {
      return {quantity: prevState.quantity + 1};
    });
  }

  decreaseQuantity = () => {
    if (this.state.quantity === 0) {
      return;
    }
    this.setState((prevState, props) => {
      return {quantity: prevState.quantity - 1};
    });
  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Store</h1>
        </header>
        <Menu items={this.state.menuItems}
          addItemToOrder={this.addItemToOrder.bind(this)}
          removeItemFromOrder={this.removeItemFromOrder.bind(this)}/>
      </div>
    );
  }
}

export default App;
