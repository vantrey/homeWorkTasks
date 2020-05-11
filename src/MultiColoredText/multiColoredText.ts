type MultiColoredText = {
  getChars: (text: string) => Array<string>
  getRandomColor: () => string
}

export const multiColoredText: MultiColoredText = {
  getChars(text) {
    let words: any = text.split(' ').map((w, i, wrds) => {
      if (i === wrds.length - 1) {
        return [...w]
      } else
        return [...w, 'space']
    })
    return [].concat(...words) // [].concat([['w'], ['o'], ['r'], ['d']]) -> how to type it?
  },
  getRandomColor() {
    let randomRed = Math.floor(Math.random() * 256)
    let randomGreen = Math.floor(Math.random() * 256)
    let randomBlue = Math.floor(Math.random() * 256)
    return `rgb(${randomRed},${randomGreen},${randomBlue})`
  }
}