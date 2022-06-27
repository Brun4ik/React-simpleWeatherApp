import React, {useState} from "react";
import "./App.css"
import City from "./components/City";
import {fetchWeather} from "./Api/Fetch";
import MyInput from "./components/MyInput";
import Temp from "./components/Temp";
function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] =useState({})
    const searchCity = async (event) => {
        if(event.key === "Enter") {
            const infoData = await fetchWeather(city);
            setWeather(infoData);
            setCity("");
            console.log(infoData);
        }
    }
    const eventHandler = (e) => {
        setCity((e.target.value))
    }
    //
    // const eventInput = (e) => {
    //     if(e.key === "Enter") {
    //
    //     }
    // }

  return (
    <div className="App">
        <div className="header">
            <h1>Weather App</h1>
            <MyInput
                value={city}
                onChange={e => eventHandler(e)}
                onKeyPress={searchCity}
            />
        </div>
        {weather.main && (
            <div className= "City">
                <City weather={weather} value={city} city={setCity}/>
                <Temp weather={weather}/>
                <h2>{weather.weather[0].description}</h2>
            </div>

        )}
    </div>
  );
}
export default App;
