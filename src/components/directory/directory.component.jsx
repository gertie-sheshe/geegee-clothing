import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';

// Selectors
import { selectSections } from '../../redux/directory/directory.selectors';

import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...section }) => (
      <MenuItem key={id} {...section} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(Directory);
