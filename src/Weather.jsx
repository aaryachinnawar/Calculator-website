import { useState } from "react";
import Input from "./Input";
import SearchBox from "./SearchBox";

export default function Weather(){
 
  let [weather,setWeather]=useState({
    name:"",
    temp:"",
    wind:"",
    pressure:"",
    humidity:"",
    feelsLike:"",
    sunrise:"",
    sunset:"",
    visibility:"",
    icon:"",
    description:""
  })

  let info = (updateInfo) => {
    setWeather(updateInfo);
  }

  return (
    <div className="weather">
      <SearchBox info={info} />
      <br />
      <Input weather={weather}/>
    </div>
  )
}