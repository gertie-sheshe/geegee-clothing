import React from 'react';
import { connect}  from 'react-redux';

import { removeItemFromCart, addItemToCart, removeItemQuantity } from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss';

const CheckOutItem = ({cartItem, removeItem, addItem, removeQuantity}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
      <div className="checkout-item">
        <div className="image-container">
          <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <div onClick={() => removeQuantity(cartItem)} className="arrow">
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div onClick={() => addItem(cartItem)} className="arrow">
            &#10095;
          </div>
        </span>
        <span className="price">{price * quantity}</span>
        <div className="remove-button" onClick={() => removeItem(cartItem)}>
          &#10005;
        </div>
      </div>
    );};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItemToCart(item)),
    removeQuantity: item => dispatch(removeItemQuantity(item))
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
