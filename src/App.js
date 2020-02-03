import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Auth from './pages/auth/auth.component';
import CheckOutPage from './pages/checkout/checkout.component';

import { checkUserSession } from './redux/user/user.actions';

// Selectors
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

const App = ({ checkUserSession, currentUser }) => {
  // Replaces componentDidMount
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            currentUser ? <HomePage /> : <Redirect to="/signin" />
          }
        />
        <Route
          path="/shop"
          render={props =>
            currentUser ? <ShopPage {...props} /> : <Redirect to="/signin" />
          }
        />
        <Route
          exact
          path="/checkout"
          render={() =>
            currentUser ? <CheckOutPage /> : <Redirect to="/signin" />
          }
        />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
