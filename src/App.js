import React from 'react';
import './App.css';
import Tolkachev from "./Tolkachev/Tolkachev";
import TolkachevProgress from "./TolkachevProgress/TolkachevProgress";
import TolkachevSkills from "./TolkachevSkills/TolkachevSkills";
import TolkachevInput from "./TolkachevInput/TolkachevInput";

const App = () => {
  return (
    <div className="App">
      <Tolkachev/>
      <TolkachevProgress day={'Tuesday'}/>
      <TolkachevSkills/>
      <TolkachevInput/>
    </div>
  );
}

export default App;
