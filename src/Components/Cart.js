import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cart.css';

export default class Cart extends Component {

  currency = (amount) => {
    return amount.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' })
  }

  totalCost = (item) => {
    return item.price * item.quantity;
  }

  render() {

    const {
      items
    } = this.props

    const total = items.reduce((total, item) => total + this.totalCost(item), 0);
  
    return (
      <div id="cart">
        <h2>Order Summary</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {items.filter((item) => item.quantity > 0).map((item,index) => (
              <tr className="" key={item.id}>
                <td className="name">{item.name}</td>
                <td className="quantity">{item.quantity}</td>
                <td className="cost">{this.currency(this.totalCost(item))}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="name">Grand total:</td>
              <td/>
              <td/>
              <td className="total-cost">{this.currency(total)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

Cart.propTypes = {
  items: PropTypes.array
};
