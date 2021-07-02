import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
// When importing an svg, always import as ReactComponent so that it renders.
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      {/* We can create navigation using react-router-dom's Link */}
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          // Signout
          <div className="option" onClick={() => auth.signOut()}>
            {currentUser.displayName.toUpperCase()}(SIGN OUT)
          </div>
        ) : (
          // Link to Login Page
          <Link className="option" to="/signin">
            LOGIN
          </Link>
        )}
      </div>
    </div>
  );
};

// Connecting to root reducer.
// state variable here is the root reducer
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
