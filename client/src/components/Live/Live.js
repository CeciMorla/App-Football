import React, {useEffect} from "react";
import Nav from "../Nav/Nav";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {fixtureLive} from '../../actions/index.js';
import TablesLive from "../TablesLive/TablesLive";



const Live = ()=>{
    const dispatch = useDispatch();
    const live = useSelector((state) => state.live);
    
    
    useEffect(()=>{
        dispatch(fixtureLive())
    },[])

    return(
        <div>
            <Nav/>
            <TablesLive live={live}/>
        </div>
    )

}

export default Live;