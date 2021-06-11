import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './GreetingsProps';
import Counter from './Counter';

function App() {
  const onClick = (name:string) => {
    console.log(`Button saying, 'hello, ${name}!'`);
  }
  return (
    <div>
      <Greetings name='coffee' onClick={onClick}
      option='welcome, place in React with Typescript'
      />
      <Counter/>
    </div>
  );
}

export default App;
