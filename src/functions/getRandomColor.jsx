function getRandomNumber() {
  return Math.floor(Math.random() * 256)
}

const getRandomColor = () => {
  return [getRandomNumber(), getRandomNumber(), getRandomNumber()]
}

export default getRandomColor
