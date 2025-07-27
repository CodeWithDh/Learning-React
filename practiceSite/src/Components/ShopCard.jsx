import "./ShopCard.css";
export default function ShopCard({title , description , price , img}){
    return(
        <div className="shopCard">
            <div className="cardUpper" style={{backgroundImage:`url(${img})`}}>
                <h2>{title}</h2>
                <ul>
                    {description.map((value,index)=>{
                        return(
                            <li key={index}>{value}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="cardLower">
                <p className="oldPrice">₹{new Intl.NumberFormat('en-IN').format(price[0])}</p>
                <h3 className="newPrice">₹{new Intl.NumberFormat('en-IN').format(price[1])}</h3>
            </div>
        </div>
    )
}