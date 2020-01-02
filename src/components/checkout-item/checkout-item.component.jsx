import React from 'react';
import { connect } from 'react-redux';

import {
  removeItemFromCart,
  addItemToCart,
  removeItemQuantity,
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout-item.styles';

const CheckOutItem = ({ cartItem, removeItem, addItem, removeQuantity }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeQuantity(cartItem)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(cartItem)} className="arrow">
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price * quantity}</TextContainer>
      <RemoveButtonContainer onClick={() => removeItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCart(item)),
  addItem: item => dispatch(addItemToCart(item)),
  removeQuantity: item => dispatch(removeItemQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
