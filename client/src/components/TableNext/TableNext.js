import React from "react";

const TableNext = ({date,teamHome,teamAway,logoH,logoA}) => {
    return(
        <div>
            
            <img src={logoH} alt='img'/>
            <h5>{teamHome}</h5>
            <p>{date}</p>
            <h5>{teamAway}</h5>
            <img src={logoA} alt='img'/>
        </div>
    )
}

export default TableNext;