import React from "react"
import styles from "./StyleSwitcher.module.css"



class StyleSwitcher extends React.Component {

  setStyle = () => {

  }

  render = () => {

    return (
      <div className={styles.switcher}>
        <input type={`radio`}/> светлая
        <input type={`radio`}/>
        <input type={`radio`}/>
      </div>
    )
  }
}

export default StyleSwitcher