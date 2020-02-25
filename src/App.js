import React from 'react';
import './App.css';
import MyName from "./Tolkachev/MyName";
import TolkachevProgress from "./TolkachevProgress/TolkachevProgress";
import TolkachevSkills from "./TolkachevSkills/TolkachevSkills";
import TolkachevInput from "./TolkachevInput/TolkachevInput";

class App extends React.Component {
  render = () => {
    return (
      <div className="App">
        <MyName/>
        <TolkachevProgress day={'Tuesday'}/>
        <TolkachevSkills/>
        <TolkachevInput/>
      </div>
    );
  }
}

export default App;
