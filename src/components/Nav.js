import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const currentHouse = localStorage.getItem('myHouse');
  return (
    <header>
      <nav className='navbar' id={'nav' + currentHouse}>
        <div className='container'>
          <div className='navbar-brand'>
            <Link to='/myhouse' className='navbar-item'>
              Home
            </Link>
            <Link to='/game' className='navbar-item'>
              Play a game
            </Link>
            <Link to='/wizardingworld' className='navbar-item'>
              Wizarding World List
            </Link>
            <Link to='/classmates' className='navbar-item'>
              My Classmates List
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
