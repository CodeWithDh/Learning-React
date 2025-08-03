import {useState} from "react"
import "./Form.css"
export default function Form(){
    let [formData,setFormData]=useState([{}])
    console.log(formData)
    let getData=(e)=>{
        e.preventDefault();
        let data=e.target.form;
        let {name,username,remarks,rating}={
            name:data[0].value,
            username:data[1].value,
            remarks:data[2].value,
            rating:data[3].value,
        };
        setFormData(prev=>{
            return [
                ...prev,
                {name,username,remarks,rating}
            ]
        })
        name="";
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
            style={{backgroundColor:"white",padding:"0.5rem",border:"none",width:"12rem",height:"2.2rem",borderRadius:"0.3rem",color:"Black",fontSize:"1rem"}}
            />
            <br /><br /><br />
            <button  type="submit" onClick={(event)=>getData(event)}>Submit</button>
        </form>
        </div>
    )
}