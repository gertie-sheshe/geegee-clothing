import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className='collection-item'>
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className='image' />

        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton inverted> ADD TO CART </CustomButton>
    </div>
);

export default CollectionItem;