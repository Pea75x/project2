import React from 'react';
import axios from 'axios';

import Nav from './Nav';
function WizardingWorld() {
  const [buttonState, setButtonState] = React.useState('all');

  const endPoint = `http://hp-api.herokuapp.com/api/characters`;

  const [classmates, setClassmates] = React.useState(null);

  function getClassmates() {
    return axios.get(`${endPoint}`);
  }

  function radioButtonChange(e) {
    setButtonState(e.target.value);
  }

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getClassmates();
        setClassmates(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Nav />
      <h1>The Wizarding World</h1>
      <label>
        <input
          type="radio"
          name="all"
          value="all"
          checked={buttonState === 'all'}
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
      {/* <ul>
        {!classmates ? (
          <p>Loading...</p>
        ) : (
          classmates.map((member, i) => (
            <div key={member[i]}>
              <h2>{member.name}</h2>
              {!member.image ? (
                <img
                  width="150px"
                  src={require('../assets/houseCrests/' +
                    currentHouse +
                    '.webp')}
                  alt={currentHouse + ' crest'}
                />
              ) : (
                <img width="150px" src={member.image} />
              )}

              <p>Ancestry: {member.ancestry}</p>
              <p>Patronus: {member.patronus}</p>
              <p>---</p>
            </div>
          ))
        )}
      </ul> */}
    </>
  );
}

export default WizardingWorld;
