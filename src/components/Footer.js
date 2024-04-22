import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      Devloped by Puneeth, Follow me on
      <Link to="https://twitter.com/puneethnviraat" target="_blank">
        <span className="footer-social-icons">
          <FaXTwitter />
        </span>
      </Link>
    </div>
  );
};

export default Footer;
