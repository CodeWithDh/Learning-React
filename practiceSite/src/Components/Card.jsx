export default function Card({count,Title, desc, price , features,More}) {
    let isExpensive=price>30000;
    let style={backgroundColor:"yellow"}
    return(
    <div className="card" style={isExpensive ? style : {}}>
        <span>{count}</span>
    <h3>{Title}</h3>
    <h6>{desc}</h6>
    <h4>{price}</h4>
    <h5>Features : </h5>
    <ol>
        {features.map((feature,index)=>{
            return <li key={index}>{feature}</li>
        })}
    </ol>
    <h5>More : </h5>
    <ol>
        {Object.entries(More).map(([key,value],index)=>{
            return <li key={index}>{key} : {value}</li>
        })}
    </ol>
    </div>
    )
}