import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import MenuItem from '../menu-item/menu-item.component';

// Selectors
import {selectSections} from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...section }) => (
      <MenuItem key={id} {...section} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(Directory);
