import {react,useEffect, useState} from "react"
export function InputBox(
    {
        label,
        amount,
        onAmountChange,
        selectedCurrency,
        onSelectedCurrencyChange,
        amountIsDisabled,
        currencies=[]
    }){
    return(
        <>
        <div
            className="bg-white w-full h-20 my-2 mt-4 rounded-lg text-orange-500 flex justify-between px-2">
                <div className="from">
                    <label 
                    htmlFor={label}
                    className="flex my-2 font-bold"
                    >{label}</label>
                <input 
                type="number"
                value={amount}
                disabled={amountIsDisabled}
                onChange={(e)=>{
                    onAmountChange && onAmountChange(e.target.value)
                }}
                className="w-full text-orange-500 text-lg  p-1  "
                />
                </div>
                {/* type */}
                <div className="to">
                    <label 
                    htmlFor="currency"
                    className="flex my-2 ont-bold"
                    >Currency</label>
                    <select 
                    type="select"
                    value={selectedCurrency}
                    onChange={(e)=>{
                        onSelectedCurrencyChange && onSelectedCurrencyChange(e.target.value)
                    }}
                    className="bg-white-800 ml-8 bg-gray-200 rounded-md p-1 text-orange-500">
                        {currencies.map((option)=>{
                            return <option key={option} value={option}>{option}</option>
                        })}
                    </select>
                </div>
            </div>
        </>
        
    )
}