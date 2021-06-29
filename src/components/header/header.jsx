import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
// When importing an svg, always import as ReactComponent so that it renders.
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
