import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './footer.css';
const Footer = () => {
  return (
      <footer className="App-footer">
        <div className="inner-footer">
        <SocialIcon url="http://twitter.com" />
        <SocialIcon url="http://facebook.com" />
        <SocialIcon url="http://vk.com" />
        <SocialIcon url="http://google.com" />
        </div>
      </footer>
  );
}

export default Footer;