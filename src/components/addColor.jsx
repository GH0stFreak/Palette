import getRandomColor from '../functions/getRandomColor'

function addColor({ index, setColor }) {
  function addNewColor(index) {
    setColor((prev) => {
      let tempArr = prev.slice()
      tempArr.splice(index, 0, { color: getRandomColor(), lock: false })
      return [...tempArr]
    })
  }
  return (
    <div className='addColor' onClick={() => addNewColor(index)}>
      <svg
        width='40'
        height='40'
        viewBox='0 0 24 24'
        fill='no ne'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default addColor
