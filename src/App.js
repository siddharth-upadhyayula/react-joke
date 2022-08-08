import * as axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');

  const getJoke = () => {
    axios.get("https://v2.jokeapi.dev/joke/Any").then(
      (response) => {
        console.log(response);
        setJoke(response.data.joke);
      }
    )
  }
  return (
    <div className="App">
      <button onClick={getJoke}>Random Joke</button>
      <h2>{joke}</h2>
    </div>
  );
}

export default App;
