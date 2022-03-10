import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <nav className='navbar is-dark'>
        <div className='container'>
          <div className='navbar-brand'>
            <Link to='/myhouse' className='navbar-item'>
              Home
            </Link>
            <Link to='' className='navbar-item'>
              Play a game
            </Link>
            <Link to='' className='navbar-item'>
              Wizarding World List
            </Link>
            <Link to='' className='navbar-item'>
              My Classmates List
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
