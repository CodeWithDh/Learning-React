import {useEffect,useState} from "react"

function UseCurrencyInfo(currency){
    const[data,setData]=useState({})
    useEffect(()=>{
        let url =`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
       fetch(url)
       .then((res)=>res.json())
       .then((res)=>setData(res[currency])) 
    },[currency])
    console.log(data)
    return data
}
export default UseCurrencyInfo()