import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./WeatherWidget.css"
import {useState} from "react"
import WeatherCard from "./WeatherCard.jsx"
export default function WeatherWidget(){

    let[city,setCity]=useState("")
    let [error,setError]=useState(false);
    let[cityInfo,setCityInfo]=useState(null)

    let weather_url="https://api.openweathermap.org/data/2.5/weather"
    let  api_key="13928736b0ee82ffc0022a048444d184";
    
    const getWeather=async()=>{
        try{
            let res=await fetch(`${weather_url}?q=${city}&appid=${api_key}&units=metric`);
            let jsonRes=await res.json();
            let cityInfo={
                cityName:city,
                feels_like:jsonRes.main.feels_like,
                temp:jsonRes.main.temp,
                tempMin:jsonRes.main.temp_min,
                tempMax:jsonRes.main.temp_max,
                condition:jsonRes.weather[0].main,
                description:jsonRes.weather[0].description,
            }
            setError(false)
            return  cityInfo;
        }catch(err){
            throw err;
        };
    }

    const handleChange=(event)=>{
        setCity(event.target.value);
    }

    const handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            let res=await getWeather();
            setCityInfo(res)
            setCity("");
        }catch(err){
            setError(true);
        }
    }


    return(
        <>
        <div className="WeatherWidget">
          <form action="/submit">

            <h2>Find Weather Report</h2>
            <TextField 
            className="searchBar" 
            id="city" 
            label="Enter City" 
            variant="outlined"
            value={city}
            onChange={handleChange}
            />

            <Button 
            style={{margin:"0.35rem 2rem"}} 
            variant='contained' 
            size='large'
            type="submit"
            onClick={handleSubmit}>
                Search
            </Button>
            {error?<p style={{color:"red"}}>This place does'nt exists! </p>:null}
          </form>
        </div>
        {cityInfo?<WeatherCard cityInfo={cityInfo} />: null }
        </>
    )
}