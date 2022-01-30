import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav";
import {statistics} from '../../actions/index.js';
import TableStatistics from "../TableStatistics/TableStatistics";
import { useParams } from "react-router-dom";
import TableLive from "../TableLive/TableLive";

const Statistics = () => {
    const dispatch = useDispatch();
    const statistic = useSelector((state)=> state.statistics);
    let {fixture} = useParams();
    console.log(statistic)
    
    useEffect(()=>{
        dispatch(statistics(fixture))
    },[])

    return(
        <div>
            <Nav/>
            {
                statistic?.map((e,i) => <TableStatistics
                            key = {e.team.id}
                            name = {e.team.name}
                            logo = {e.team.logo}
                            type = {e.statistics.map(e => e.type)}
                            value = {e.statistics.map(e => e.value)}
                />)
            }
        </div>
    )
}

export default Statistics;