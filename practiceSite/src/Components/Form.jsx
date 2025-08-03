import {useState} from "react"
import "./Form.css"
export default function Form(){
    let [fullName,setFullName]=useState("")
    
    let getData=(e)=>{
        e.preventDefault();
        console.log("Data :\nName: "+e.target.form[0].value);
        setFullName(e.target.form[0].value)
    }
    return(
        <div className="formComponent">
        <h1>Form Component</h1>
        <form>
            <label 
            htmlFor="Name"
            style={{fontSize:"1.1rem",backgroundColor:"white",padding:"0.3rem",marginRight:"1rem"}}
            >Name :</label>
            <input 
            id="Name"
            placeholder="Enter Text here..."
            style={{backgroundColor:"white",padding:"0.5rem",border:"none",width:"12rem",height:"2.2rem",borderRadius:"0.3rem",color:"Black",fontSize:"1rem",marginRight:"1rem"}}
            
            />
            <button  type="submit" onClick={(event)=>getData(event)}>Submit</button>
        </form>
        </div>
    )
}