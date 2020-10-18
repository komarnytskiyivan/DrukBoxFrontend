import React from 'react';
import './header.css';
import {useRef} from 'react';
import BurgerMenu from '../burger-menu'
const Header = () => {
  const refHeaderLink = useRef(null);
  const refBurgerMenu = useRef(null);
  
    window.addEventListener('resize',() => {
      if(window.innerWidth <= 1000 ){
        refHeaderLink.current.classList.add('hide');
        refBurgerMenu.current.classList.remove('hide');
      }
      if(window.innerWidth >= 1000 ){
        refHeaderLink.current.classList.remove('hide');
        refBurgerMenu.current.classList.add('hide');
      }
    })
  return (
      <header className="App-header">
        <div className="inner-header">
          <div className="header_links" ref={refHeaderLink}>
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
          <div className="burger-menu hide" ref={refBurgerMenu}>
          <BurgerMenu />
          </div>
        </div>
      </header>
  );
}

export default Header;
