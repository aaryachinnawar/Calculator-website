import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox ({info}) {

let [city,setCity]=useState("");

const url="https://api.openweathermap.org/data/2.5/weather";
const api="23137f3d6c6180de3414beeb7de2906f";

let getApi= async() => {
  let response= await fetch(`${url}?q=${city}&appid=${api}`);
  let jsonRes=await response.json();
  console.log(jsonRes);   
  let result={
    name:city,
    temp:jsonRes.main.temp,
    wind:jsonRes.wind.speed,
    pressure:jsonRes.main.pressure,
    humidity:jsonRes.main.humidity,
    feelsLike:jsonRes.main.feels_like,
    sunrise:jsonRes.sys.sunrise,
    sunset:jsonRes.sys.sunset,
    visibility:jsonRes.visibility,
    icon:jsonRes.weather[0].icon,
    description:jsonRes.weather[0].main

  }
  console.log(result);
  return result;
}

let handleChange = (e) => {
  setCity(e.target.value);
}

let handleSubmit = async (e) => {
  e.preventDefault();
  console.log(`${city}`);
  setCity("");
 let updateInfo=await getApi();
 info(updateInfo);
}

  return(
    <div>
    <h3 style={{color:"white",fontSize:50}}>Atmosight</h3>
    <form onSubmit={handleSubmit} >
    <TextField
        fullWidth
        onChange={handleChange}
        id="city"
        label="City Name"
        variant="outlined"
        value={city}
        sx={{
          input: {
            color: "white", // Text color inside the field
          },
          "& .MuiInputLabel-root": {
            color: "white", // Label color
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // Default border color
            },
            "&:hover fieldset": {
              borderColor: "lightblue", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "lightblue", // Border color when focused
            },
          },
        }}
      />
      <br /><br />
      <Button  variant="contained" type="submit">Search</Button> 
    </form>
    </div>
  )
}