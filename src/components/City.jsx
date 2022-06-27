import React, {useEffect, useState} from 'react';

const City = ({weather}) => {

    let Timer = () => {

    }

    return (
        <div >
            <div style={{paddingBottom: '10px', paddingTop: "20px", fontSize: "24px"}}>{weather.name}</div>
            <div style={{paddingBottom: '10px', paddingTop: "20px", fontSize: "24px"}}>{new Date().toDateString("ru")}</div>
        </div>
    );
};

export default City;