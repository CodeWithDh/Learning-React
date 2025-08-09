import "./Form.css"
import {useState} from "react"
export default function Form(){
    let[formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:5,
    })
    let[comments,setComments]=useState([{
            username:"beinggg_shivam",
            remarks:"Too Good",
            rating:5,
    }])
    const handleSubmit=(event)=>{
        setComments((currData)=>{
            return [
                ...currData,
                {
                    username:formData.username,
                    remarks:formData.remarks,
                    rating:formData.rating
                }
            ]
        })
        
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        })
        event.preventDefault();
    }
    const trackInp=(event)=>{
        setFormData((currData)=>{
            return{
                ...currData,
                [event.target.name]:event.target.value
            }
        })
    }
    return (
        <div>
            <h2>Comments</h2>
            <div className="comments">
                {comments.map((comment,index) => {
                    return <div className="comment" key={index}>
                        
                        <h5><span>{index+1}. </span> {comment.username}</h5>
                        <br />
                        <p>{comment.remarks}</p>
                        <br />
                        <span>{comment.rating}</span>
                    </div>
                    
                })}
            </div>
            
            <form>
                <label htmlFor="username">Username: </label>
                <input 
                 type="text" 
                 name="username" 
                 id="username"
                 autoComplete="username"
                 value={formData.username}
                 onChange={trackInp} 
                 />
                <br /><br />
                <label htmlFor="remarks">Remarks: </label>
                <input 
                type="text" 
                name="remarks" 
                id="remarks"
                value={formData.remarks}
                onChange={trackInp} 
                />
                <br /><br />
                <label htmlFor="rating">Ratings: </label>
                <input 
                type="number" 
                min={1}
                max={5}
                name="rating" 
                id="rating"
                value={formData.rating}
                onChange={trackInp}  
                />
                <br /><br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}