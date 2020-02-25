import React from 'react';
import './App.css';
import Presentation from './Presentation/Presentation'
import Interests from './Interests/Interests';
import Greetings from "./Greetings/Greetings";

class App extends React.Component {
  state = {
    presentation: {
      presentName: 'Толкачев Иван',
      presentTemplate: 'Привет! Меня зовут'
    },
    interests: [
      {interestTitle: 'настолки'},
      {interestTitle: 'футбол'},
      {interestTitle: 'программирование'},
    ],
  }

  render = () => {
    return (
      <div className='App'>
        <Presentation presentation={this.state.presentation}/>
        <Interests interests={this.state.interests}/>
        <Greetings/>
      </div>
    );
  }
}

export default App;
