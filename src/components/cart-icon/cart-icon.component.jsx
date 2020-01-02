import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './cart-icon.styles';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

// Selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartComponent = ({ toggleCartHidden, itemCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
