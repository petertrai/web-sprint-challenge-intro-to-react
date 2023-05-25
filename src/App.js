import React, { useEffect, useState  } from 'react';
import styled from 'styled-components';
import Character from './components/Character'
import axios from 'axios'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [ data, setData ] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
        {data.map((char) => (<Character data={char}/>))}
    </div>
  );
}

export default App;
// think about putting the useEffect on app.js and just using app.js to render the character.
// for each res.data => create a character div?