import React from 'react';
import axios from 'axios';

import Nav from './Nav';

const currentHouse = localStorage.getItem('myHouse');

function Game() {
  const endPoint = 'http://hp-api.herokuapp.com/api/characters';
  const [potterData, setPotterData] = React.useState(null);
  const [randomPerson, setRandomPerson] = React.useState(undefined);
  const [points, setPoints] = React.useState(0);
  const [goes, setGoes] = React.useState(0);
  const [pointsText, setPointsText] = React.useState('');

  const hpApi = () => {
    return axios.get(`${endPoint}`);
  };

  function getNextCard() {
    setRandomPerson(Math.floor(Math.random() * potterData.length));
    setGoes(goes + 1);
    console.log(randomPerson);
  }

  function checkAnswer(event) {
    const yourAnswer = event.target.innerText;
    const correctAnswer = potterData[randomPerson].house;
    if (yourAnswer === correctAnswer) {
      setPoints(points + 10);
      setPointsText(`10 points to ${currentHouse}!`);
      getNextCard();
    } else {
      setPointsText(
        `5 points will be taken from ${currentHouse} for your serious lack of judgement...`
      );
      getNextCard();
    }
  }

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await hpApi();
        setPotterData(
          data.filter((person) => person.image !== '' && person.house !== '')
        );
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  console.log(potterData);
  console.log('goes:', goes);

  if (goes < 10) {
    return (
      <>
        <Nav />
        <div className='gameBackground'>
          <div className='game-container'>
            <h1>Whos House is whos?</h1>
            <div className='pointsText'>{pointsText}</div>
            {randomPerson === undefined ? (
              <button onClick={getNextCard} className='playGame game-button'>
                Play Game
              </button>
            ) : (
              <div className='gameStart'>
                <div className='game-card'>
                  <h2>{potterData[randomPerson].name}</h2>
                  <img
                    src={potterData[randomPerson].image}
                    alt={potterData[randomPerson].name}
                  />
                </div>
                <div className='houseButtons'>
                  <button className='game-button' onClick={checkAnswer}>
                    Gryffindor
                  </button>
                  <button className='game-button' onClick={checkAnswer}>
                    Hufflepuff
                  </button>
                  <button className='game-button' onClick={checkAnswer}>
                    Ravenclaw
                  </button>
                  <button className='game-button' onClick={checkAnswer}>
                    Slytherin
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Nav />
        <div>
          <h1>Game Over!</h1>
          <p>{points} points</p>
        </div>
      </>
    );
  }
}

export default Game;
