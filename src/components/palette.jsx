import Color from './color'
import AddColor from './addColor'
import getRandomColor from '../functions/getRandomColor'
import {
  RGBToHSL as RGBToHSL,
  RGBToHEX as RGBToHEX,
} from '../functions/getConvertedColor'
import { useState, useEffect, useCallback } from 'react'

const Palette = ({ copyColorVal }) => {
  const [color, setColor] = useState([
    { color: getRandomColor(), lock: false },
    { color: getRandomColor(), lock: false },
    { color: getRandomColor(), lock: false },
    { color: getRandomColor(), lock: false },
  ])

  const keyPress = useCallback(
    (e) => {
      if (e.key === ' ' || e.key === 'Spacebar') {
        setColor((prev) => {
          prev.forEach((el) => {
            if (el['lock'] === false) {
              el['color'] = getRandomColor()
            }
          })
          return [...prev]
        })
      }
    },
    [setColor]
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  function copyAllColor() {
    let copyString = ''
    color.forEach((el) => {
      let rgb, hsl, hex
      if (copyColorVal === 'all') {
        rgb = `rgb(${el['color'][0]},${el['color'][1]},${el['color'][2]})`
        hsl = RGBToHSL(...el['color'])
        hex = RGBToHEX(...el['color'])
        copyString += rgb + ' ' + hsl + ' ' + hex + '\n'
      } else if (copyColorVal === 'rgb') {
        rgb = `rgb(${el['color'][0]},${el['color'][1]},${el['color'][2]})`
        copyString += rgb + '\n'
      } else if (copyColorVal === 'hsl') {
        hsl = RGBToHSL(...el['color'])
        copyString += hsl + '\n'
      } else if (copyColorVal === 'hex') {
        hex = RGBToHEX(...el['color'])
        copyString += hex + '\n'
      }
    })
    navigator.clipboard.writeText(copyString)
  }

  return (
    <>
      <main className='main'>
        <Color
          key={Math.random()}
          index={0}
          setColor={setColor}
          color={color[0]}
          copyColorVal={copyColorVal}
        />
        {color &&
          color.map((el, index) => {
            // console.log(el)
            if (index == 0) return
            // console.log(el)
            return (
              <>
                <div className='container'>
                  <AddColor
                    key={Math.random()}
                    index={index}
                    setColor={setColor}
                  />
                  <Color
                    key={Math.random()}
                    index={index}
                    setColor={setColor}
                    color={el}
                    copyColorVal={copyColorVal}
                  />
                </div>
              </>
            )
          })}
      </main>
      <button className='copy-all-color' onClick={() => copyAllColor()}>
        Copy All Colors
      </button>
    </>
  )
}

export default Palette
