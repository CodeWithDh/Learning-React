import { useState , useCallback , useEffect } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <div
      className="bg-gray-800 text-white w-full max-w-md mx-auto shadow-md rounded-lg px-4 mx-0 my-8"
      >
        <h1 className='text-3xl text-orange-500'>Pasword Generator</h1>
        <input type="text"
        className="bg-white rounded-md w-80 my-4 p-1 mx-3 text-orange-500"   />
        <button>copy</button>
        <input type="range" />
        <label>Length: {length}</label>
        <input type="checkbox" />
        <label>Numbers</label>
        <input type="checkbox" />
        <label>characters</label>
      </div>
    </>
  )
}

export default App
