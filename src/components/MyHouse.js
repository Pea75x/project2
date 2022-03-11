import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Nav from './Nav';

import nameBackDrop from '../assets/personalised-name.png';

function MyHouse() {
  const myName = localStorage.getItem('myName');
  const currentHouse = localStorage.getItem('myHouse');
  const navigate = useNavigate();

  function reSort() {
    navigate('/');
  }
  // ! image hard coded as griffindor whilst we sort image change
  return (
    <>
      <Nav />
      <div className='myHousePage' id={'myHouseBackground' + currentHouse}>
        <div className='paperBackground'>
          <div className='nameOnMap'>
            <div className='nameText'>{myName}</div>
            <img
              src={nameBackDrop}
              alt='name back drop'
              className='nameBackDrop'
            />
          </div>
          <div id={'header' + currentHouse} className='container'>
            <h1>Welcome to {currentHouse}!</h1>
            <img
              src={require('../assets/houseCrests/' + currentHouse + '.webp')}
              alt={currentHouse + ' crest'}
              className='myBadge'
            />
            <button onClick={reSort}>Re-sort</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyHouse;
