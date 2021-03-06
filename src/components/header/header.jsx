import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
// When importing an svg, always import as ReactComponent so that it renders.
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = ({ currentUser, hidden }) => {
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
            SIGN OUT
          </div>
        ) : (
          // Link to Login Page
          <Link className="option" to="/signin">
            LOGIN
          </Link>
        )}
        <CartIcon />
      </div>
      {/* <CartDropdown /> */}
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

// Connecting to root reducer.
// state variable here is the root reducer
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser: currentUser,
  hidden: hidden,
});

export default connect(mapStateToProps)(Header);
