import React, { useState } from "react";
import './App.css';

const Time = () => {
    let timeme  = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(timeme);

    const UpdateTime = () => {
        let timeme  = new Date().toLocaleTimeString();
        setCtime(timeme);
    };

    setInterval(UpdateTime,1000)

    return(
            <div className="div-main">
                <div className="time">
                    <h1>{ctime}</h1>
                </div>
            </div>
    )
}

export default Time;