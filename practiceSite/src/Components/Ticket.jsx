
export default function Ticket({ticket}){
    
    return (
        <>
        <h5>{ticket.length>0?"Ticket Number: "+ticket.join(""):"Buy a Lottery to Start the Game!"}</h5>
        </>
    );
}