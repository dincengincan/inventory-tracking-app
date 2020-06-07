import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const Header = () => (
  <div className="header">
    <h3>Stok Takip App</h3>
    <Link style={{ color: 'white', paddingRight: '20px' }} to="/">
      Login Sayfası
    </Link>
  </div>
);

export default Header;
