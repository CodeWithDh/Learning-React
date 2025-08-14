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
     <ProductTab/>
     <LikeCounter/>
     <LudoBoard/>
     <ToDoList/>
     <LotteryGame />
     <Form/>
     </>
  )
}

export default App
