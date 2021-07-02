import React, { Component } from "react";
import "./App.css";

// React Router
import { Route, Switch, Redirect } from "react-router-dom";

// Firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// Pages
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/shop/shop";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

// Components
import Header from "./components/header/header";

// Redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action"; //This will function will now replace this.setState related to current user.

class App extends Component {
  // This is used for componentWillUnmount to avoid memory leaks.
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // The below function is checking if firebase auth state is changed (ie signin, logout)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user });
      // console.log(user);
      // createUserProfileDocument(user);

      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot((snapShot) => {
          this.props.setCurrentUser(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          {/* <Route exact path="/signin" component={SignInAndSignUpPage} /> */}
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  // setCurrentUser is from user.action and is imported.
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
