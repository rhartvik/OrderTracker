import React from 'react';
import PropTypes from 'prop-types';



class MenuItem extends React.Component{
  render(){
    const {
      name,
      price,
      quantity,
      imageUrl
    } = this.props.item

    return (
      <div>
        <img className='item-thumbnail' src={imageUrl} alt={name}/>
        <div>
        <p>
          <strong className="item-name">{name}</strong>
          <span className="item-price">{price.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' })}</span>
        </p>
        <p>
          <button>-</button>
          {quantity}
          <button>+</button>
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
