import{react,useState,useEffect} from "react"

export default function UseCurrencyInfo(currency){
    const [data,setData]= useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=>{
            setData(res[currency])
        })
    }, [currency])
    return data;
}
