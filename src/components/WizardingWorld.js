import React from 'react';
import axios from 'axios';

import Nav from './Nav';
function WizardingWorld() {
  const [buttonState, setButtonState] = React.useState('');
  const currentHouse = localStorage.getItem('myHouse');

  const endPoint = `http://hp-api.herokuapp.com/api/characters`;

  const [classmates, setClassmates] = React.useState(null);

  function getClassmates() {
    if (buttonState === undefined) {
      return axios.get(`${endPoint}`);
    } else {
      return axios.get(`${endPoint}/${buttonState}`);
    }
  }
  function hasHouse(person) {
    if (person.house) {
      return require('../assets/houseCrests/' + person.house + '.webp');
    } else {
      return require('../assets/NoHouse.webp');
    }
  }

  function radioButtonChange(e) {
    setButtonState(e.target.value);
  }

  React.useEffect(() => {
    const getData = async (search) => {
      try {
        const { data } = await getClassmates(search);
        setClassmates(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [buttonState]);

  console.log(classmates);
  return (
    <>
      <Nav />
      <section className="main-page" id={'mainPage-' + currentHouse}>
        <div className="container" id={'container-' + currentHouse}>
          <h1 className="wizard-title" id={'title' + currentHouse}>
            The Whole Wizarding World
          </h1>
          <label>
            <input
              type="radio"
              name="all"
              value=""
              checked={buttonState === ''}
              className="radio-button"
              onChange={radioButtonChange}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="students"
              value="students"
              checked={buttonState === 'students'}
              className="radio-button"
              onChange={radioButtonChange}
            />
            Students
          </label>
          <label>
            <input
              type="radio"
              name="staff"
              value="staff"
              checked={buttonState === 'staff'}
              className="radio-button"
              onChange={radioButtonChange}
            />
            Staff
          </label>
          <div className="card-containers">
            {!classmates ? (
              <p>Loading...</p>
            ) : (
              classmates.map((member, i) => (
                <div className="card" key={i} id={'house-' + member.house}>
                  <h2>{member.name}</h2>
                  {!member.image ? (
                    <img
                      src={hasHouse(member)}
                      alt={'crest'}
                      className="cardImage"
                    />
                  ) : (
                    <img src={member.image} className="cardImage" />
                  )}

                  <p>
                    <span className="bold">Patronus: </span>
                    <span className="thin">
                      {!member.patronus ? 'None' : member.patronus}
                    </span>
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default WizardingWorld;
