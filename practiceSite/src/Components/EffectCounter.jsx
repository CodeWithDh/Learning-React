// import {useEffect} from "react"


export default function EffectCounter(){
    // let[count,setCount]=useEffect()
    return (
        <div>
            <h2>Learning useEffect </h2>
            <div className="counter" style={{padding:"1rem"} }>
                <h3>Count: {}</h3>
                <br />
                <button>Add + 1</button>
            </div>
        </div>
    )
}