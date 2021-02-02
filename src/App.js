import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop'
import Header from './componenets/Header/Header'
import SignPage from './pages/SignPage/SignPage'
import {setCurrentUser} from './redux/User/userActions'

import {auth, createUserProfileDocument} from './firebase/firebase'

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route 
            exact 
            path='/signin' 
            render={() => 
            this.props.currentUser ?
              (<Redirect to='/' />) 
              : 
              (<SignPage />)
            } 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateTopProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateTopProps, mapDispatchToProps)(App);