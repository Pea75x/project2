import React from 'react';
import axios from 'axios';

import Nav from './Nav';
function Classmates() {
  const currentHouse = localStorage.getItem('myHouse');
  const endPoint = `http://hp-api.herokuapp.com/api/characters/house/${currentHouse}`;
  const [classmates, setClassmates] = React.useState(null);

  // todo extract to api component
  function getClassmates() {
    return axios.get(`${endPoint}`);
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

      <h1>Members of {currentHouse}</h1>
      <ul>
        {!classmates ? (
          <p>Loading...</p>
        ) : (
          classmates.map((member, i) => (
            <div key={i}>
              <h2>{member.name}</h2>
              {!member.image ? (
                <img
                  width='150px'
                  src={require('../assets/houseCrests/' +
                    currentHouse +
                    '.webp')}
                  alt={currentHouse + ' crest'}
                />
              ) : (
                <img width='150px' src={member.image} />
              )}

              <p>Ancestry: {member.ancestry}</p>
              <p>Patronus: {member.patronus}</p>
              <p>---</p>
            </div>
          ))
        )}
      </ul>
    </>
  );
}

export default Classmates;
