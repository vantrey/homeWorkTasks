import React from 'react';
import './App.css';
import TolkachevProgress from "./TolkachevProgress/TolkachevProgress";
import TolkachevSkills from "./TolkachevSkills/TolkachevSkills";
import TolkachevInput from "./TolkachevInput/TolkachevInput";
import Presentation from './Presentation/Presentation'

class App extends React.Component {

  render = () => {
    return (
      <div className="App">
        <Presentation/>
      </div>
    );
  }
}

export default App;
