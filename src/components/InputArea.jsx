import React, {useState} from 'react';
import "./style.css"
import {fetchWeather} from "../Api/Fetch";

const InputArea = () => {
   const [city, setCity] = useState("");
   const [weather, setWeather] =useState({})
   const searchCity = async (event) => {
      // event.preventDefault();
       if(event.key === "Enter") {
           const infoData = fetchWeather(city);
           setWeather(infoData);
           setCity("");
           console.log(infoData);
    }
   }

    return (
        <div className="header">
            <h1>Weather App</h1>
            <input
                type="text"
                className= "InputArea"
                value={city}
                onChange={event => setCity(event.target.value)}
                onKeyDown={searchCity}
            />
        </div>
    );
};

export default InputArea;