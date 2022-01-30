import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav";
import {statistics, event} from '../../actions/index.js';
import TableStatistics from "../TableStatistics/TableStatistics";
import { useParams } from "react-router-dom";
import Event from "../Event/Event";

const Statistics = () => {
    const dispatch = useDispatch();
    const statistic = useSelector((state)=> state.statistics);
    const even = useSelector((state)=> state.event)
    let {fixture} = useParams();
    console.log(statistic)
    
    useEffect(()=>{
        dispatch(statistics(fixture))
        dispatch(event(fixture))
    },[])

    return(
        <div>
            <Nav/>
            {
                statistic?.map((e) => <TableStatistics
                            key = {e.team.id}
                            name = {e.team.name}
                            logo = {e.team.logo}
                            type = {e.statistics.map(e => e.type)}
                            value = {e.statistics.map(e => e.value)}
                />)
            }
            {
                even?.map((e)=> <Event
                        key = {e.team.name}
                        name = {e.team.name}
                        logo = {e.team.logo}
                        playerName={e.player.name}
                        assistName={e.assist.name}
                        type={e.type}
                        detail={e.detail}
                />)
            }

        </div>
    )
}

export default Statistics;