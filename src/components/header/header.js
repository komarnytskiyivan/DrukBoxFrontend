import React from 'react';
import './header.css';
const Header = () => {
  return (
      <header className="App-header">
        <div className="inner-header">
          <div className="header_left_links">
            <a href="index.html" className="active">DrukBox</a>
            <a href="printfile.html">Print File</a>
            <a href="history.html">History</a>
            <a href="addpages.html">Add pages</a>
          </div>
          <div className="header_right_links">
            <a href="/">Sign in</a>
          </div>
        </div>
      </header>
  );
}

export default Header;
