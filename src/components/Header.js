import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledHeader = styled.div`
  .header-container {
    height: 5vh;
    width: 90%;
    margin: auto;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
  }
  .title-container {
    display: flex;
  }
  nav {
    padding-right: 15px;
  }
  a {
    padding: 2px;
  }
  button {
    background-color: #000;
    color: #ffffff;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 3px;
    height: 2em;
    padding-left: 24px;
    padding-right: 24px;
  }
  button:hover {
    background-color: rgb(24, 191, 85);
    border: 1px solid rgb(24, 191, 85);
    color: white;
  }
`;

const Header = () => {
    return (
      <StyledHeader>
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
        
        </StyledHeader>
    )
}

export default Header;