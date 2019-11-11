import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    // constructor() {
    //     super()
    // }
    state = {
        sections: [{
            title: 'toys',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/toys'
        },
        {
            title: 'clothing',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/clothing'
        },
        {
            title: 'treats',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/treats'
        },
        {
            title: 'leash',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/leashs'
        },
        {
            title: 'crates',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/crates'
        }]
    };

    render()
    {
        return(
            <div className="directory-menu">
                {this.state.sections.map(({id, ...section}) => (
                    <MenuItem key={id} {...section} />
                ))}
            </div>
        )
    }
}

export default Directory;