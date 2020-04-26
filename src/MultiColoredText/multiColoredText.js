
export const multiColoredText = {
  getChars(text) {
    let words = text.split(' ').map((w, i, wrds) => {
      if (i === wrds.length - 1) {
        return [...w]
      } else
        return [...w, 'space']
    })
    return [].concat(...words)
  },
  getRandomColor() {
    let randomRed = Math.floor(Math.random() * 256)
    let randomGreen = Math.floor(Math.random() * 256)
    let randomBlue = Math.floor(Math.random() * 256)
    return `rgb(${randomRed},${randomGreen},${randomBlue})`
  }
}