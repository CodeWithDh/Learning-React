import {useState , useEffect} from "react"


export default function EffectCounter(){
    let[count,setCount]=useState(0);
    let [jokeText,setJoke]=useState("")

    const jokeUrl="https://icanhazdadjoke.com/slack";

    async function getJoke(){
        let response=await (await fetch(jokeUrl)).json()
        
        setJoke(response.attachments[0].text)
    }


    function loader(){
        setTimeout(()=>{
            console.log("Screen Loaded")
        },2000)
    }
    function initialEffect(){
        loader()
        console.log("Loading...")
        getJoke()
    }


    useEffect(initialEffect,[])
    return (
        <div>
            <h2>Learning useEffect </h2>
            <div className="counter" style={{padding:"1rem"} }>
                <h3>Count: {count}</h3>
                <br />
                <button onClick={()=>{
                    setCount(count+1);
                }} >Add + 1</button>

                <div className="joke">
                    <h2>Jokes</h2>
                    <h3 style={{padding:"2rem",color:"red"}}>{jokeText}</h3>
                    <button  onClick={getJoke}>Get Joke</button>
                </div>
            </div>
        </div>
    )
}