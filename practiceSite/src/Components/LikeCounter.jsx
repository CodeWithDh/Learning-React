import { useState } from "react";
import './LikeCounter.css'
export default function LikeCounter(){
    console.log("Component Rendered")
    let [isLiked,setLike]=useState(false);
    let [count,setCount]=useState(0);
    let handleLike=()=>{
        setLike((isLiked)=>{
            return !isLiked;
        });
        setLike((isLiked)=>{
            return !isLiked;
        });
        !isLiked ? setCount(count+1) : setCount(count-1); 
        // why i need to check !isLiked to track how maany likes are there. Why it's not isLiked 
        // - because react is asynchonous it changes value at rendered stage not called stage and it is just called.
    }
    return (
        <>
            <h2>States in React</h2>
            <div className="likeDiv" >
                <h4>Likes: {count}</h4>
                {isLiked ? <i onClick={handleLike} className="fa-solid fa-heart" style={{cursor:"pointer",color:"red",fontSize:"1.7rem"}}></i> : <i onClick={handleLike} className="fa-regular fa-heart" style={{cursor:"pointer",fontSize:"1.5rem"}}></i> }
            </div>
        </>
    )
}