import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

class MenuItem extends React.Component{

  state = {
    id: 0,
    quantity: 0
  }

  componentWillMount() {
    this.setState(() => {
      return {
        id: this.props.item.id,
        quantity: this.props.item.quantity
      }
    });
  }

  increaseQuantity = () => {
    this.props.addItemToOrder(this.state.id);
  }

  decreaseQuantity = () => {
    this.props.removeItemFromOrder(this.state.id);
  }

  render(){
    const {
      name,
      price,
      quantity,
      imageUrl
    } = this.props.item

    return (
      <div className="menu-item">
        <img className='item-thumbnail' src={imageUrl} alt={name}/>
        <div>
        <p>
          <strong className="item-name">{name}</strong>
          <span className="item-price">{price.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' })}</span>
        </p>
        <p>
          <button onClick={this.decreaseQuantity.bind(this)}>-</button>
          <span className="item-quantity">{quantity}</span>
          <button onClick={this.increaseQuantity.bind(this)}>+</button>
        </p>
        </div>
      </div>
    );
  }
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    imageUrl: PropTypes.string
  })
}

export default MenuItem
