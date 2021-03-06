import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DispatchContext } from "../contexts";
import actionType from "../constants"

const Header = () => {
    const dispatch = useContext(DispatchContext);

    return (
      <header className="header">
        <div className="brand">
          <button className="hideLarge" onClick={() => dispatch({type: actionType.OPEN_ASIDE})}>
            &#9776;
          </button>
          <Link to="/">amazona</Link>
        </div>
        <div className="header-links">
          <Link to="/cart">Cart</Link>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
    );
}

export default Header;