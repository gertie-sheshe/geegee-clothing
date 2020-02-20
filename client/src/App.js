import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';

import { checkUserSession } from './redux/user/user.actions';

// Selectors
import { selectCurrentUser } from './redux/user/user.selectors';

import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
// const Header = lazy(() => import('./components/header/header.component'));
const Auth = lazy(() => import('./pages/auth/auth.component'));
const CheckOutPage = lazy(() => import('./pages/checkout/checkout.component'));

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route
              exact
              path="/"
              render={() =>
                this.props.currentUser ? (
                  <HomePage />
                ) : (
                  <Redirect to="/signin" />
                )
              }
            />
            <Route
              path="/shop"
              render={props =>
                this.props.currentUser ? (
                  <ShopPage {...props} />
                ) : (
                  <Redirect to="/signin" />
                )
              }
            />
            <Route
              exact
              path="/checkout"
              render={() =>
                this.props.currentUser ? (
                  <CheckOutPage />
                ) : (
                  <Redirect to="/signin" />
                )
              }
            />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <Auth />
              }
            />
          </Suspense>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
