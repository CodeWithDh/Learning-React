export default function MessageBox({name,age,color}){
    return(
        <div>
            <h3>Hello ! <span style={{color}}>{name}</span></h3>
            <h5>Age : <span style={{color}}>{age}</span></h5>
        </div>
    )
}