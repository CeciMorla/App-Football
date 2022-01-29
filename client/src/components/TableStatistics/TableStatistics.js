import React from "react";

const TableStatistics = ({name,logo,type,value}) =>{
    return(
        <div>
            <img src={logo} alt='img'/>
            <h5>{name}</h5>
            <p>{type}</p>
            <p>{value}</p>
        </div>
    )
}

export default TableStatistics;