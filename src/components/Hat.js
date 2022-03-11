import React from 'react';
import hat from '../assets/Sorting_Hat.webp';
import { useNavigate } from 'react-router-dom';

function Hat() {
  const navigate = useNavigate();
  const [name, setName] = React.useState('');

  function sort() {
    const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
    const sortedHouse = houses[Math.floor(Math.random() * houses.length)];
    localStorage.setItem('myHouse', sortedHouse);
    localStorage.setItem('myName', name);
    navigate('/myhouse');
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  console.log(name);
  return (
    <>
      <div className='hatBackground'>
        <div className='hatPage'>
          <h1 className='wizard-title'>Welcome to Hogwarts!</h1>
          <h2>Time to be sorted into your house...</h2>
          <div className='hatHolder'>
            <label>
              <h2>Name</h2>
              <input type='text' name='name' onChange={handleChange} />
              <button onClick={sort}>Sort</button>
            </label>
            <div className='hatAndButton'>
              <img
                width='200px'
                src={hat}
                alt='Sorting Hat'
                className='sortingHat'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hat;
