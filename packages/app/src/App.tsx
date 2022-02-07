import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@iw/button';
import { Title } from '@iw/title';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Your count is {count}
        <Title />
        <Button onClick={() => setCount((prev) => ++prev)} />
      </header>
    </div>
  );
}

export default App;
