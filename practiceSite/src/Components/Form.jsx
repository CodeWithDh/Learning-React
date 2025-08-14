import "./Form.css"
import {useState} from "react"
import {useFormik} from "formik"
export default function Form(){
    // let[formData,setFormData]=useState({
    //     username:"",
    //     remarks:"",
    //     rating:5,
    // })
    let[comments,setComments]=useState([{
            username:"",
            remarks:"",
            rating:null,
    }])

    const validate=values=>{
        const errors={};
        if(!values.username){
            errors.username="Required";
        }else if(values.username.length > 15 || values.username.length <= 6 ){
            errors.username="Usrename must be between 6 to 15 letters"
        }

        if(!values.remarks){
            errors.remarks="Atleast write 3-4 words"
        }else if(values.remarks.length > 150){
            errors.remarks="Not more than 150 character"
        }
        return errors
    }


    const formik=useFormik({
        initialValues:{
            username:'',
            remarks:'',
            rating:5
        },
        validate,
        onSubmit:(values,{resetForm})=>{
            setComments(currData=>[...currData,values])
            resetForm();
        }
    })
    const handleSubmit=(event)=>{
        setComments((currData)=>{
            return [
                ...currData,
                {
                    username:formik.values.username,
                    remarks:formik.values.remarks,
                    rating:formik.values.rating
                }
            ]
        })
    }
        
    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: 5
    //     })
    //     event.preventDefault();
    // }

    // const trackInp=(event)=>{
    //     setFormData((currData)=>{
    //         return{
    //             ...currData,
    //             [event.target.name]:event.target.value
    //         }
    //     })
    // }
    return (
        <div>
            <h2>Comments</h2>
            <div className="comments">
                { comments.map((comment,index)=>{
                    if(comment.username.length>1){
                        return  <div className="comment" key={index}>
                        
                        <h5><span>{index}. </span> {comment.username}</h5>
                        <br />
                        <p>{comment.remarks}</p>
                        <br />
                        <span>{comment.rating}</span>
                    </div>
                    }else{
                        return ;
                    }
                    }) 
                }
            </div>
            
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input 
                 type="text" 
                 name="username" 
                 id="username"
                 autoComplete="username"
                 value={formik.values.username}
                 onChange={formik.handleChange} 
                 />
                 {formik.touched.username &&formik.errors.username? <p>{formik.errors.username}</p> : null}
                <br /><br />
                <label htmlFor="remarks">Remarks: </label>
                <input 
                type="text" 
                name="remarks" 
                id="remarks"
                value={formik.values.remarks}
                onChange={formik.handleChange} 
                />
                {formik.touched.remarks && formik.errors.remarks? <p>{formik.errors.remarks}</p> : null}
                <br /><br />
                <label htmlFor="rating">Ratings: </label>
                <input 
                type="number" 
                min={1}
                max={5}
                name="rating" 
                id="rating"
                value={formik.values.rating}
                onChange={formik.handleChange}  
                />
                {formik.touched.rating && formik.errors.rating? <p>{formik.errors.rating}</p> : null}
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}