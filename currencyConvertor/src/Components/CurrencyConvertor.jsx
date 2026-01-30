import {react,useEffect, useState} from "react"

export function CurrencyConvertor(){
    const [fromAmt,setFromAmt]=useState(0);
    const[fromCurrency,setfromCurrency]=("INR")
    const[toCurrency,setToCurrency]=("USD")
    return(
        <>
        {/* Currency Convertor */}
        <div
        className="bg-gray-800 w-md px-4 text-white py-4 text-center mx-auto my-8">
            {/* InputBox from */}
            <div
            className="bg-white w-full h-20 -my-2 mt-4 rounded-lg text-orange-500 flex justify-between px-2">
                {/* from */}
                <div className="from">
                    <label 
                    htmlFor="From"
                    className="flex my-2 font-bold"
                    >from</label>
                <input 
                type="number"
                value={fromAmt}
                onChange={(e)=>{
                    setFromAmt(e.target.value)
                }}
                className="w-full text-orange-500 text-lg  p-1  "
                />
                </div>
                {/* type */}
                <div className="to ">
                    <label 
                    htmlFor="currencyType"
                    className="flex my-2 font-bold"
                    >Currency Type</label>
                    <select 
                    type="select"
                    onChange={(e)=>{
                        setfromCurrency(e.target.value)
                    }}
                    className="bg-white-800 ml-8 bg-gray-200 rounded-md p-1 text-orange-500">
                        <option value={fromCurrency}>{fromCurrency}</option>
                    </select>
                </div>
            </div>
            <button
            className="bg-orange-500 p-2 rounded-lg m-0 p-0 relative "
            >Swap</button>
            {/* InputBox to */}
            <div
            className="bg-white w-full h-20 -my-2 mb-4 rounded-lg text-orange-500 flex justify-between px-2">
                {/* from */}
                <div className="to">
                    <label 
                    htmlFor="to"
                    className="flex my-2 font-bold"
                    >To</label>
                <input 
                type="number"
                value={0}
                disabled
                className="w-full text-orange-500 text-lg  p-1  "
                />
                </div>
                {/* Type */}
                <div className="to ">
                    <label 
                    htmlFor="currencyType"
                    className="flex my-2 font-bold"
                    >Currency Type</label>
                    <select 
                    type="select"
                    onChange={(e)=>{
                        setToCurrency(e.target.value)
                    }}
                    className="bg-white-500 ml-8 bg-gray-200 rounded-md p-1 text-orange-500">
                        <option value={toCurrency}>{toCurrency}</option>
                    </select>
                </div>
            </div>
            <button
            className="text-white font-medium p-2 rounded-md px-6 bg-blue-600"
            >Convert {"USD"} to {"INR"}</button>
        </div>
        </>
    )
}