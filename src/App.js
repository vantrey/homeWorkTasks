import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tolkachev from "./Tolkachev";

function App() {
  return (
    <div className="App">
      <Tolkachev/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          itk
        </a>
      </header>
    </div>
  );
}

export default App;
