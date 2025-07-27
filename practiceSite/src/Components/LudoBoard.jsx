import './LudoBoard.css'
import {useState} from "react"
export default function LudoBoard(){
    let [moves,setMoves]=useState({redMoves:0,blueMoves:0,greenMoves: 0,yellowMoves:0})
    let handleMoves=(event)=>{
        let moveThis=event.currentTarget.id;
        moves[moveThis]++;

        moveThis ? setMoves({...moves}) : "";
    }
    return(
        <div className="board">
            <h2>Ludo Board</h2>
            <div className="player" >
                <p>Blue Moves: {moves.blueMoves}</p>
                <button onClick={handleMoves} id="blueMoves">+1</button>
            </div>
            <div className="player">
                <p>Red Moves: {moves.redMoves}</p>
                <button onClick={handleMoves} id="redMoves">+1</button>
            </div>
            <div className="player">
                <p>Green Moves: {moves.greenMoves}</p>
                <button onClick={handleMoves} id="greenMoves">+1</button>
            </div>
            <div className="player">
                <p>Yellow Moves: {moves.yellowMoves}</p>
                <button onClick={handleMoves} id="yellowMoves">+1</button>
            </div>
        </div>
    )
}