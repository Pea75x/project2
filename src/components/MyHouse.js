import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Gryffindor from '../assets/houseCrests/Gryffindor.webp';

function MyHouse() {
  const currentHouse = localStorage.getItem('myHouse');
  const navigate = useNavigate();

  function reSort() {
    navigate('/');
  }
  // ! image hard coded as griffindor whilst we sort image change
  return (
    <>
      <Nav />
      <h1>Welcome to {currentHouse}!</h1>
      <img
        src={require('../assets/houseCrests/' + currentHouse + '.webp')}
        alt={currentHouse + ' crest'}
      />
      <button onClick={reSort}>Re-sort</button>
    </>
  );
}

export default MyHouse;
