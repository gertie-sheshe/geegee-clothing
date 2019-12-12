import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...section }) => (
      <MenuItem key={id} {...section} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  sections: state.directory.sections,
});

export default connect(mapStateToProps)(Directory);
