import React from 'react';
import hat from '../assets/Sorting_Hat.webp';
import { useNavigate } from 'react-router-dom';

function Hat() {
  const navigate = useNavigate();
  function sort() {
    const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
    const sortedHouse = houses[Math.floor(Math.random() * houses.length)];
    localStorage.setItem('myHouse', sortedHouse);
    navigate('/myhouse');
  }

  return (
    <>
      <h1>Welcome to Hogwarts</h1>
      <img width="200px" src={hat} alt="Sorting Hat" />
      <button onClick={sort}>Sort</button>
    </>
  );
}

export default Hat;
