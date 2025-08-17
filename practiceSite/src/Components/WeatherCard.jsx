import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./WeatherCard.css"
export default function WeatherCard({cityInfo}){
    console.log("Here",cityInfo)
    return <Card className='WeatherCard' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cityInfo.cityName} 
        </Typography>
        <h4>{cityInfo.condition} : {cityInfo.feels_like} </h4><br />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Description : {cityInfo.description} <br />
          Temperature : {cityInfo.temp} <br />
          Minimum Temperature : {cityInfo.tempMin} <br />
          Maximum Temperature : {cityInfo.tempMax} <br />
        </Typography>
      </CardContent>
    </Card>
    
}