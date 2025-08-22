import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <h1 className="text-5xl font-bold text-white">Tailwind v3 with Vite 🚀</h1>
    </div>
    </>
  )
}

export default App
