function generateTicket(arr,size){
    arr=[];
    for(let i=0;i<size;i++){
        let digit=Math.floor(Math.random()*9)+1;
        arr.push(digit);
    }
    return arr;
}

function sum(arr){
    return arr.reduce((acc, curr) => acc + curr, 0);
}
export {generateTicket,sum};