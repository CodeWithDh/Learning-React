import {react,useCallback,useEffect, useState} from "react"
import { InputBox } from "./InputBox";
import UseCurrencyInfo from "../hooks/UseCurrencyInfo";

export function CurrencyConvertor(){
    
    const [fromAmount,setFromAmount]=useState(0);
    const [fromCurrency,setFromCurrency]=useState("usd");
    const [toAmount,setToAmount]=useState(0);
    const [toCurrency,setToCurrency]=useState("inr");
    let data=UseCurrencyInfo(fromCurrency);
    const Convertor=useCallback((fromAmount,fromCurrency,toCurrency,data)=>{
        return setToAmount(Math.floor(fromAmount*data[toCurrency]))
    },[fromAmount,fromCurrency,toCurrency,setFromAmount,setToCurrency])
    return(
        <>
        {/* Currency Convertor */}
        <div
        className="bg-gray-800 w-md px-4 text-white py-4 text-center mx-auto my-8">
            {/* InputBox from */}
            <InputBox
            label="from"
            amount={fromAmount}
            onAmountChange={setFromAmount}
            selectedCurrency={fromCurrency}
            onSelectedCurrencyChange={setFromCurrency}
            amountIsDisabled={false}
            currencies={Object.keys(data)}
            />
            
            <button
            className="bg-orange-500 p-2 rounded-lg m-0 p-0 relative "
            onClick={(e)=>{
                setFromCurrency(toCurrency);
                setToCurrency(fromCurrency)
            }}
            >Swap</button>

            {/* InputBox to */}

            <InputBox
            label="to"
            amount={toAmount}
            onAmountChange={setToAmount}
            selectedCurrency={toCurrency}
            onSelectedCurrencyChange={setToCurrency}
            amountIsDisabled={true}
            currencies={Object.keys(data)} />
            
            
        </div>
        </>
    )
}