import React from "react";

const Event = ({name,logo,playerName,assistName,type,detail}) =>{
    return (
        <div>
            <img src={logo} alt='img'/>
            <h2>{name}</h2>
            <h3>{playerName}</h3>
            <p>{assistName}</p>
            <p>{type}</p>
            <p>{detail}</p>
        </div>
    )
}

export default Event;