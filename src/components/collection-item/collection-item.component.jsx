import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItemToCart } from '../../redux/cart/cart.actions.js';

import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) => {
    const { imageUrl, name, price } = item
    return (
    <div className='collection-item'>
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className='image' />

        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted> ADD TO CART </CustomButton>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);