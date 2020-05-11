import React from "react"
import styles from "./StyleSwitcher.module.css"

type PropsType = {
  value: string
  checked: boolean
  title: string
  setStyle: (value: string) => void
}

class StyleSwitcher extends React.Component<PropsType> {

  onStyleChange = (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement>) => {
    this.props.setStyle(e.currentTarget.id)
  }
  render = () => {
    return (
      <div className={styles.switcher}>
        <input
          name={`style`}
          type={`radio`}
          id={this.props.value}
          checked={this.props.checked}
          onChange={this.onStyleChange}/>
        <span id={this.props.value} onClick={this.onStyleChange}>{this.props.title} theme </span>
      </div>
    )
  }
}

export default StyleSwitcher