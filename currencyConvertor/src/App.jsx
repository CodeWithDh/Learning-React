import { useState } from 'react'
import { CurrencyConvertor } from './Components/CurrencyConvertor'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1
     className='text-orange-500 text-4xl text-center'
     >Currency Convertor</h1>
     <CurrencyConvertor/>
    </>
  )
}

export default App
