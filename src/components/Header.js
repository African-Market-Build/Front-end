import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-container">
          <div className="title-container">
            <h1 className="title">African Marketplace</h1>
          </div>
          <nav>
            <Link to="/">
              <button id="home">HOME</button>
            </Link>

            <Link to="/login">
              <button id="login">LOGIN</button>
            </Link>

            <Link to="/signup">
              <button id="signup">SIGN UP</button>
            </Link>
          </nav>
        </div>
    )
}

export default Header;