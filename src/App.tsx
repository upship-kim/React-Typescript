import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './GreetingsProps';

function App() {
  const onClick = (name:string) => {
    console.log(`hello, ${name}!`);
  }
  return (
    <div>
      <Greetings name='upship' option='Typescript & React'
      onClick={onClick}
      />
    </div>
  );
}

export default App;
