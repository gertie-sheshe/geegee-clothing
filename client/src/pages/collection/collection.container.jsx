import { connect } from 'react-redux';
import { compose } from 'redux';

import CollectionPage from './collection.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionPage);

export default CollectionPageContainer;
