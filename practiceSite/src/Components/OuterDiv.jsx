export default function OuterDiv({list,setList}){
    return <>
    <div className="Outer">
        <h2>List Items</h2>
            {list.map((item)=>{
                <p>
                    {item.Task}
                </p>
            })}
            
    </div>
    </>
}