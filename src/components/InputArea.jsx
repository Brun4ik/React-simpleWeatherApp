import React, {useState} from 'react';
import "./style.css"

const InputArea = () => {
   const [value, setValue] = useState("");


    return (
        <div className="Page">
            <h1>Weather App</h1>
            <input
                type="text"
                className= "InputArea"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
};

export default InputArea;