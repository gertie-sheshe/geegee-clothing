import React from 'react';

import './cart-item.styles.scss';

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item in cart" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        ${price} x {quantity}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
