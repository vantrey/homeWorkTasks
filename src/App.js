import React from 'react';
import './App.css';
import Presentation from './Presentation/Presentation'
import Interests from './Interests/Interests';
import Greetings from "./Greetings/Greetings";

class App extends React.Component {
  inputRef = React.createRef()

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
      greetingsOutput: ['qq'],
    },
  }

  addGreetingsOutput = () => {
    let currentInputValue = this.inputRef.current.value
    alert(currentInputValue)
    let newGreetings = {...this.state.greetings}
    newGreetings.greetingsOutput = [...this.state.greetings.greetingsOutput, currentInputValue]
    this.setState({greetings:newGreetings})
  }

  render = () => {
    return (
      <div className='App'>
        <Presentation presentation={this.state.presentation}/>
        <Interests interestsContent={this.state.interestsContent}/>
        <Greetings
          greetings={this.state.greetings}
          addGreetingsOutput={this.addGreetingsOutput}
          inputRef={this.inputRef}
        />
      </div>
    );
  }
}

export default App;
