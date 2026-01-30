import { useState , useCallback , useEffect, useRef } from 'react'
import './App.css'



function App() {
const [password,setPassword]=useState("")
const [length,setLength]=useState(8)
const[numberAllowed,setNumberAllowed]=useState(false)
const[charAllowed,setCharAllowed]=useState(false)

const generatePassword=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyz"

  if(numberAllowed){
    str+="1234567890"
  }
  if(charAllowed){
    str+="!@#$%^&*()_+=-/*-+./.,<>';:}{[]|"
  }
  for (let i =1; i <=length; i++) {
  let char=Math.floor(Math.random()*str.length)+1
  pass+=str.charAt(char);
  }
  setPassword(pass)
})

const passwordRef=useRef(null)

const passwordToClipBoard=useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
})

useEffect(()=>{
  generatePassword()
},[charAllowed,length,numberAllowed,setPassword])


  return (
    <>
      <div
      className="bg-gray-800 text-white w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8"
      >
        <h1 className='text-center text-3xl  text-orange-500'>Password Generator</h1>
        
        <input type="text"
        value={password}
        readOnly
        ref={passwordRef}
        className="bg-white rounded-md w-md my-4 p-1 mx-3 text-orange-500"   />
        
        <button type='submit'
        onClick={passwordToClipBoard}  
        className='bg-blue-500 p-2 rounded-md cursor-pointer'
        >copy</button>
        
        <input type="range"
        onChange={(e)=>{
          setLength(e.target.value)
        }}
        min={8}
        max={16}
        className='mx-3 w-50'
        />
        
        <label
        className='mx-3'
        >Length: <span className='text-orange-500'>{length}</span></label>
        
        <input type="checkbox"
        onClick={()=>{
          setNumberAllowed((prev)=>!prev)
          
        }}
        className='mx-3'
        />
        
        <label>Numbers</label>
        
        <input type="checkbox" 
        onClick={()=>{
          setCharAllowed((prev)=>!prev)
          
        }}
        className='mx-3'
        />
        
        <label>characters</label>
      
      </div>
    </>
  )
}

export default App
