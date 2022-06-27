import React from 'react';
import "./style.css"

const Temp = ({weather}) => {
    return (
        <div className="tempeature">
            {Math.round(weather.main.temp)} &deg;C
        </div>
    );
};

export default Temp;