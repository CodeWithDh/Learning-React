import {useState} from "react"
import "./Form.css"
export default function Form(){
    let [formData,setFormData]=useState({})

    let getData=(event)=>{
        event.preventDefault();
        let formArr=event.target.form
        Object.keys(formData).forEach((key)=>{
            forEach((item of))
        })
        console.log(formArr[0].value);
        
    }
    return(
        <div className="formComponent">
        <h1>Form Component</h1>
        <br /><br /><br /><br />
        <form>
            
            <label 
            htmlFor="Name"
            style={{fontSize:"1.1rem",backgroundColor:"white",padding:"0.3rem",marginRight:"1rem"}}
            >Name :
            </label>

            <input 
            id="Name"
            placeholder="Name"
            value={formData.name}
            style={{backgroundColor:"white",padding:"0.5rem",border:"none",width:"12rem",height:"2.2rem",borderRadius:"0.3rem",color:"Black",fontSize:"1rem"}}
            />

            <br /><br />

            <label 
            htmlFor="username"
            style={{fontSize:"1.1rem",backgroundColor:"white",padding:"0.3rem",marginRight:"1rem"}}
            >Username :
            </label>

            <input 
            id="username"
            placeholder="Username"
            value={formData.username}
            style={{backgroundColor:"white",padding:"0.5rem",border:"none",width:"12rem",height:"2.2rem",borderRadius:"0.3rem",color:"Black",fontSize:"1rem"}}
            />

            <br /><br />

            <label 
            htmlFor="Remarks"
            style={{fontSize:"1.1rem",backgroundColor:"white",padding:"0.3rem",marginRight:"1rem"}}
            >Remarks :</label>

            <input 
            id="Remarks"
            placeholder="Give your Remarks..."
            value={formData.remarks}
            style={{backgroundColor:"white",padding:"0.5rem",border:"none",width:"12rem",height:"2.2rem",borderRadius:"0.3rem",color:"Black",fontSize:"1rem"}}
            />
            <br /><br />
            <label 
            htmlFor="Rating"
            style={{fontSize:"1.1rem",backgroundColor:"white",padding:"0.3rem",marginRight:"1rem"}}
            >Ratings :</label>
            <input 
            type="number"
            max={5}
            min={1}
            id="Rating"
            placeholder="Rating"
            value={formData.rating}
            style={{backgroundColor:"white",padding:"0.5rem",border:"none",width:"12rem",height:"2.2rem",borderRadius:"0.3rem",color:"Black",fontSize:"1rem"}}
            />
            <br /><br /><br />
            <button  type="submit" onClick={(event)=>getData(event)}>Submit</button>
        </form>
        </div>
    )
}