import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='logo'>Drain Gang Wiki</h1>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          {/* new pages */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
