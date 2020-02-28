import React from 'react';
import styles from './App.module.css';
import Presentation from './Presentation/Presentation'
import Interests from './Interests/Interests';
import Greetings from "./Greetings/Greetings";

class App extends React.Component {
  inputRef = React.createRef();

  state = {
    presentation: {
      presentName: 'Толкачев Иван',
      presentTemplate: 'Привет! Меня зовут'
    },
    interestsContent: {
      interestsTitle: 'Мои интересы',
      interests: [
        {interestName: '/настолки/'},
        {interestName: '/футбол/'},
        {interestName: '/программирование/'},
      ],
    },
    greetings: {
      greetingsTitle: 'Записывайся в друзья!',
      greetingsOutput: [],
      buttonDisable: true,
    },
  };

  addGreetingsOutput = () => {
    let currentInputValue = this.inputRef.current.value;
    this.inputRef.current.value = '';
    alert(`Привет, ${currentInputValue}`);
    let newGreetings = {...this.state.greetings};
    newGreetings.greetingsOutput = [...this.state.greetings.greetingsOutput, currentInputValue];
    newGreetings.buttonDisable = true;
    this.setState({greetings: newGreetings})
  };

  swishButtonDisable = () => {
    if (this.inputRef.current.value.trim()) {
      let newGreetings = {...this.state.greetings};
      newGreetings.buttonDisable = false;
      this.setState({greetings: newGreetings})
    }
  };

  render = () => {
    return (
      <div className={styles.app}>
        <Presentation presentation={this.state.presentation}/>
        <Interests interestsContent={this.state.interestsContent}/>
        <Greetings
          greetings={this.state.greetings}
          addGreetingsOutput={this.addGreetingsOutput}
          inputRef={this.inputRef}
          swishButtonDisable={this.swishButtonDisable}
        />
      </div>
    );
  }
}

export default App;
