import React from 'react';
import styles from './Monday.module.css';
import Presentation from './Presentation/Presentation'
import Interests from './Interests/Interests';
import Greetings from "./Greetings/Greetings";

class Monday extends React.Component {
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
    },
  };

  addGreetingsOutput = (text) => {
    let newGreetings = {...this.state.greetings};
    newGreetings.greetingsOutput = [...this.state.greetings.greetingsOutput, text];
    this.setState({greetings: newGreetings})
  };

  render = () => {
    return (
      <div className={styles.Monday}>
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

export default Monday;
