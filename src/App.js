import React from 'react';
import './App.css';
import Presentation from './Presentation/Presentation'

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
      <div className="App">
        <Presentation presentation={this.state.presentation}/>
      </div>
    );
  }
}

export default App;
