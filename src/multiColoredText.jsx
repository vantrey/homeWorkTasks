import React from 'react'

export const multiColoredText = {
  getText(text) {
    return [...text].map(t => <span style={{color: this._getRandomColor()}}>{t}</span>
    )
  },
  _getRandomColor() {
    let randomRed = Math.floor(Math.random()*256)
    let randomGreen = Math.floor(Math.random()*256)
    let randomBlue = Math.floor(Math.random()*256)
    return `rgb(${randomRed},${randomGreen},${randomBlue})`
  }
}