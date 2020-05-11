import React from 'react'
import {multiColoredText} from './multiColoredText'

type PropsType = {
  children: string
}
function MultiColoredTextComponent(props: PropsType) {
  let multiColoredTextElements = multiColoredText.getChars(props.children).map((ch, i) => ch === 'space'
    ? <span key={i}>&#160;</span>
    : <span key={i} style={{color: multiColoredText.getRandomColor()}}>{ch}</span>)
  return <div>{multiColoredTextElements}</div>
}

export default MultiColoredTextComponent
