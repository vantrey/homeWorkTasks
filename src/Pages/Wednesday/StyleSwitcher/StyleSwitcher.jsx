import React from "react"
import styles from "./StyleSwitcher.module.css"


class StyleSwitcher extends React.Component {

  onStyleChange = (e) => {
    this.props.setStyle(e.target.value)
  }

  render = () => {

    return (
      <div className={styles.switcher}>
        <input
          name={`style`}
          type={`radio`}
          value={this.props.value}
          checked={this.props.checked}
          onChange={this.onStyleChange}/> зеленая
      </div>
    )
  }
}

export default StyleSwitcher