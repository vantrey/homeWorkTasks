const getCurrentDate = () => {
  return `on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`
}
export default getCurrentDate