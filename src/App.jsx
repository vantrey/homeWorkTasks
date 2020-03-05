import React from 'react';
import styles from './App.module.css';
import Monday from "./Pages/Monday/Monday";
import Tuesday from "./Pages/Tuesday/Tuesday";
import {HashRouter, Route} from "react-router-dom";
import NavMenu from "./NavMenu/NavMenu";


class App extends React.Component {
  render = () => {
    return (
      <HashRouter>
        <div className={styles.app}>
          <NavMenu/>
          <Route path='/Monday' render={() => <Monday/>}/>
          <Route path='/Tuesday' render={() => <Tuesday/>}/>
        </div>
      </HashRouter>
    )
  }
}


export default App;
