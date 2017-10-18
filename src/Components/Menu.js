import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import './Menu.css';

export default class Menu extends React.Component{
  render(){
    const {
      items
    } = this.props

    return (
      <div className="menu">
          {items.map((item, index) => (
              <MenuItem key={item.id} item={item}></MenuItem>
          ))}
      </div>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.array
};
