import TextField from '@mui/material/TextField';
export default function WeatherWidget(){
    return(
        <>
        <div className="WeatherWidget">
            <h2>Find Weather Report</h2>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />

        </div>
        </>
    )
}