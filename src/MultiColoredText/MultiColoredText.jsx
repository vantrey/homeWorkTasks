import React from 'react'
import {multiColoredText} from './multiColoredText.js'

const MultiColoredText = (props) => {

  return multiColoredText.getChars(props.children).map((ch, i) => ch === 'space'
    ? <span key={i}>&#160;</span>
    : <span key={i} style={{color: multiColoredText.getRandomColor()}}>{ch}</span>)
}
export default MultiColoredText
