import React from 'react';
import "./style.css"

const Temp = ({weather}) => {
    return (
        <div className="CityTempeature">
            {Math.round(weather.main.temp)} &deg;C
        </div>
    );
};

export default Temp;