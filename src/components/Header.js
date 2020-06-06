import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const Header = () => (
  <div className="header">
    <h3>Stock Tracking App</h3>
    <Link style={{ color: 'white', paddingRight: '20px' }} to="/">
      Login Page
    </Link>
  </div>
);

export default Header;
