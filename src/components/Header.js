import React from 'react';
import {Link} from 'react-router-dom'

import '../App.css';

const Header = () => (
    <div className="header">
        <h3 >Stock Tracking App</h3>
        <Link style={{textDecoration: "none", color:"white", paddingRight:"20px"}} to="/">LoginPage</Link>
    </div>
)

export default Header;