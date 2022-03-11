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
      return require('../assets/Sorting_Hat.webp');
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
                <div className="card" key={i}>
                  <h2>{member.name}</h2>
                  {!member.image ? (
                    <img width="150px" src={hasHouse(member)} alt={'crest'} />
                  ) : (
                    <img width="150px" src={member.image} />
                  )}

                  <p>Patronus: {member.patronus}</p>
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
