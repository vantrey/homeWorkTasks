import React from 'react';
import './App.css';
import Tolkachev from "./Tolkachev/Tolkachev";
import TolkachevProgress from "./TolkachevProgress/TolkachevProgress";
import TolkachevSkills from "./TolkachevSkills/TolkachevSkills";

const App = () => {
  return (
    <div className="App">
      <Tolkachev/>
      <TolkachevProgress day={'Tuesday'}/>
      <TolkachevSkills/>
    </div>
  );
}

export default App;
