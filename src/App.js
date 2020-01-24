import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Auth from './pages/auth/auth.component';
import CheckOutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { checkUserSession } from './redux/user/user.actions';

// Selectors
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

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
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              this.props.currentUser ? <HomePage /> : <Redirect to="/signin" />
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
