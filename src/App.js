import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Auth from './pages/auth/auth.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import './App.css';


class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  
  componentDidMount() {
    // user session persisted via firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
            ...snapshot.data()
            }
          });
        })
      } else {
        this.setState({
        currentUser: userAuth
      });
      }
    });

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={Auth} />
      </Switch>
    </div>
  );
  }
}

export default App;
