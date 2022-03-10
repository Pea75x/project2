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
      <section className='main-page' id={'mainPage-' + currentHouse}>
        <div className='container' id={'container-' + currentHouse}>
          <h1 className='wizard-title'>Members of {currentHouse}</h1>
          <div className='card-containers'>
            {!classmates ? (
              <p>Loading...</p>
            ) : (
              classmates.map((member, i) => (
                <div className='card' key={i}>
                  <h2>{member.name}</h2>
                  {!member.image ? (
                    <img
                      src={require('../assets/houseCrests/' +
                        currentHouse +
                        '.webp')}
                      alt={currentHouse + ' crest'}
                      className='cardImage'
                    />
                  ) : (
                    <img className='cardImage' src={member.image} />
                  )}

                  <p>
                    <strong>Ancestry:</strong> {member.ancestry}
                  </p>
                  <p>
                    <strong>Patronus:</strong> {member.patronus}
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

export default Classmates;
