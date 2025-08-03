import "./LotteryGame.css";
import { useState } from "react";
import {generateTicket, sum} from "./LotteryHelper.js"
import Ticket from "./Ticket.jsx"

export default function LotteryGame(){

    let[ticket,setTicket]=useState([]);
    let buyNewTicket=()=>{
        let newTicket=generateTicket(ticket,3) // 3 digits ticket number
        setTicket(newTicket);
    }
    let isWin=sum(ticket)===15;
    return <div className="lotteryGame">
        <h2>Lottery Game</h2>
        <Ticket ticket={ticket}/>
        <button onClick={()=>{buyNewTicket()}}>Buy New Lottery</button>
        <h3>{isWin?"Congratulations You WON":""}</h3>
    </div>
}