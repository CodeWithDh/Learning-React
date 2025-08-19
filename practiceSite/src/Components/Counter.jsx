import { useFormik } from "formik"


export default function Counter(){

    const validate=values=>{
        let errors={};
        if(values.count<0 || values.count>20){
            errors.count="count should be 0 - 20"
        }
        return errors;
    }

    let formik=useFormik({
        initialValues:{
            count:0
        },
        validate,
        onSubmit:(values,{resetForm})=>{
            resetForm();
        }
    })

    
    
    
    return (
        <>
        <div className="Counter">
            <h3>Count : {formik.values.count}</h3>
            {formik.errors.count && <p style={{color:"red"}}>{formik.errors.count}</p>}
            
            <button onClick={(event)=>{
                event.preventDefault();
                if(formik.values.count+1>20){
                    return formik.setErrors({count:"Max Values is 20"})
                }else{
                    formik.setFieldValue("count",formik.values.count+1)
                    console.log("+1")                }
            }}
            >Add +1
            </button>

            <button 
            onClick={(event)=>{
                event.preventDefault();
                if(formik.values.count-1<0){
                    return formik.setErrors({count: "Negative value Prohibited!"})
                }else{
                    formik.setFieldValue("count",formik.values.count-1)
                    console.log("-1")
                }
            }}
            >Remove -1</button>
        </div>
        </>
    )
}