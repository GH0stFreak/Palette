import Header from './components/header'
import Palette from './components/palette'
import { useState } from 'react'

function App() {
  const [copyColorVal, setCopyColorVal] = useState('all')

  return (
    <>
      <Header setCopyColorVal={setCopyColorVal} />
      <Palette copyColorVal={copyColorVal} />
    </>
  )
}

export default App
