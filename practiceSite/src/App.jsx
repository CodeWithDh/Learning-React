import { useState } from 'react'
import './App.css'
import Card from './Components/Card.jsx'
import MessageBox from './Components/MessageBox.jsx';
import ProductTab from './Components/ProductTab.jsx'
import LikeCounter from './Components/LikeCounter.jsx'
import LudoBoard from './Components/LudoBoard.jsx';
import ToDoList from './Components/ToDoList.jsx';
import LotteryGame from './Components/LotteryGame.jsx'
import Form from "./Components/Form.jsx"
import EffectCounter from "./Components/EffectCounter.jsx"
import MaterialUi from "./Components/MaterialUi.jsx"
import WeatherWidget from "./Components/WeatherWidget.jsx"
import Counter from './Components/Counter.jsx';

function App() {
  return (
    <>
    {/* <MessageBox name="Shivam Dhingra" age={20} color={"red"} />
    <MessageBox name="Muma" age={50} color={"#00ffd0ff"} />
    <MessageBox name="Bhaiya" age={29} color={"blue"} />
     <Card count={count++} Title="Phone" desc="This is Smart Phone" price="15000" More={{Brand:"Nokia",Sepcifications:"Snap-Dragon Processor"}} features={["Fast", "Durable" , "Brand - Nokia"]}  />
     <Card count={count++} Title="Laptop" desc="This is Smart Phone" price="3000" More={{Brand:"Nokia",Sepcifications:"Snap-Dragon Processor"}} features={["Fast", "Durable" , "Brand - Nokia"]}  />
     <Card count={count++} Title="fridge" desc="This is Smart Phone" price="100000" More={{Brand:"Nokia",Sepcifications:"Snap-Dragon Processor"}} features={["Fast", "Durable" , "Brand - Nokia"]}  />
     <Card count={count++} Title="Table" desc="This is Smart Phone" price="5000" More={{Brand:"Nokia",Sepcifications:"Snap-Dragon Processor"}} features={["Fast", "Durable" , "Brand - Nokia"]}  /> */}
     {/* <ProductTab/> */}
     {/* <LikeCounter/> */}
     {/* <LudoBoard/> */}
     {/* <ToDoList/> */}
     {/* <LotteryGame /> */}
     {/* <Form/> */}
     {/* <EffectCounter/> */}
     {/* <MaterialUi/> */}
     {/* <WeatherWidget/> */}
     <Counter/>
     <div className="p-10 rounded-2xl shadow-2xl bg-white">
        <h1 className="text-4xl font-extrabold text-blue-600 underline">
          Tailwind is Working 🎉
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          If you see colors, spacing, and fonts applied → ✅ Success
        </p>
        <button className="mt-6 px-6 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition">
          Test Button
        </button>
      </div>
     </>
  )
}

export default App
