import React from 'react';
import styles from './App.module.css';
import Monday from "./Pages/Monday/Monday";
import {HashRouter, Route} from "react-router-dom";
import NavMenu from "./NavMenu/NavMenu";
import Tuesday from "./Pages/Tuesday/Tuesday"
import Wednesday from "./Pages/Wednesday/Wednesday"

class App extends React.Component {
  render = () => {
    return (
      <HashRouter>
        <div className={styles.app}>
          <NavMenu/>
          <Route exact path='/' render={() => <Monday/>}/>
          <Route path='/Greetings' render={() => <Monday/>}/>
          <Route path='/TodoList' render={() => <Tuesday/>}/>
          <Route path='/Themes' render={() => <Wednesday/>}/>
        </div>
      </HashRouter>
    )
  }
}


export default App;
