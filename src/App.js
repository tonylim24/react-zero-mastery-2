import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/shop/shop";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  // This is used for componentWillUnmount to avoid memory leaks.
  unsubscribeFromAuth = null;

  componentDidMount() {
    // The below function is checking if firebase auth state is changed (ie signin, logout)
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      // console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
