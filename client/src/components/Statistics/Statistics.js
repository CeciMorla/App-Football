import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav";
import {statistics} from '../../actions/index.js';
import TableStatistics from "../TableStatistics/TableStatistics";
import { useParams } from "react-router-dom";

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
                statistic
            }
        </div>
    )
}

export default Statistics;