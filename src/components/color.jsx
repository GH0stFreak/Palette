import {
  RGBToHSL as RGBToHSL,
  RGBToHEX as RGBToHEX,
} from '../functions/getConvertedColor'

function Color({ index, setColor, color, copyColorVal }) {
  let rgb, hsl, hex
  rgb = `rgb(${color['color'][0]},${color['color'][1]},${color['color'][2]})`
  hsl = RGBToHSL(...color['color'])
  hex = RGBToHEX(...color['color'])

  function removeColor(index) {
    setColor((prev) => {
      prev.splice(index, 1)
      return [...prev]
    })
  }

  function copyColor(index) {
    let copyString
    document.querySelectorAll('#copied-container').forEach((el, i) => {
      if (i === index) {
        el.classList.toggle('block')
        setTimeout(function () {
          el.classList.toggle('block')
        }, 1500)
      }
    })
    if (copyColorVal === 'all') {
      copyString = rgb + ' ' + hsl + ' ' + hex
    } else if (copyColorVal === 'rgb') {
      copyString = rgb
    } else if (copyColorVal === 'hsl') {
      copyString = hsl
    } else if (copyColorVal === 'hex') {
      copyString = hex
    }
    navigator.clipboard.writeText(copyString)
  }

  function lockColor(index) {
    setColor((prev) => {
      prev[index]['lock'] = !prev[index]['lock']
      return [...prev]
    })
  }

  return (
    <div className='color' style={{ backgroundColor: rgb }}>
      {color['lock'] && (
        <div className='lock-container'>
          <svg
            width='40'
            height='40'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      )}
      <div className='color-menu' id='color-menu'>
        <ul className='color-list'>
          <li className='i-close' onClick={() => removeColor(index)}>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18 6L6 18M6 6L18 18'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </li>
          <li className='i-copy' onClick={() => copyColor(index)}>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </li>
          <li className='copied-container' id='copied-container'>
            Color Copied
          </li>
          <li className='i-lock' onClick={() => lockColor(index)}>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7 10V8C7 5.23858 9.23858 3 12 3C14.0503 3 15.8124 4.2341 16.584 6M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </li>
        </ul>
      </div>
      <div className='color-container'>
        <span className='rgb'>{rgb}</span>
        <span className='hsl'>{hsl}</span>
        <span className='hex'>{hex}</span>
      </div>
    </div>
  )
}

export default Color
