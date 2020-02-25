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
    interestsContent: {
      interestsTitle: 'Мои интересы',
      interests: [
        {interestName: 'настолки'},
        {interestName: 'футбол'},
        {interestName: 'программирование'},
      ],
    },
    greetings: {
      greetingsTitle: 'Скажи привет',
    },
  }

  render = () => {
    return (
      <div className='App'>
        <Presentation presentation={this.state.presentation}/>
        <Interests interestsContent={this.state.interestsContent}/>
        <Greetings greetings={this.state.greetings}/>
      </div>
    );
  }
}

export default App;
