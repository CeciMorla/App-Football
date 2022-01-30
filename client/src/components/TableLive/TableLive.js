import React from "react";
import { Link } from "react-router-dom";

const TableLive = ({date,teamHome,teamAway,logoH,logoA,goalsH,goalsA,fixture}) => {
    return(
        <div>
            <Link to= {`/statistics/${fixture}`}>
            <p>{date}</p>
            <img src={logoH} alt='img'/>
            <h5>{teamHome}</h5>
            <p>{goalsH}-{goalsA}</p>
            <h5>{teamAway}</h5>
            <img src={logoA} alt='img'/>
            </Link>
        </div>
    )
}

export default TableLive;