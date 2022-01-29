import React from "react";

const TableLive = ({date,teamHome,teamAway,logoH,logoA,goalsH,goalsA}) => {
    return(
        <div>
            <p>{date}</p>
            <img src={logoH} alt='img'/>
            <h5>{teamHome}</h5>
            <p>{goalsH}-{goalsA}</p>
            <h5>{teamAway}</h5>
            <img src={logoA} alt='img'/>
        </div>
    )
}

export default TableLive;