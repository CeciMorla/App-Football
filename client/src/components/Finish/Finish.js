import React, {useEffect} from "react";
import Nav from "../Nav/Nav";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {fixtureLast} from '../../actions/index.js';
import TablesFinish from "../TablesFinish/TablesFinish";



const Finish = ()=>{
    const dispatch = useDispatch();
    const last = useSelector((state) => state.last);
    
    
    useEffect(()=>{
        dispatch(fixtureLast())
    },[])

    return(
        <div>
            <Nav/>
            <TablesFinish last={last}/>
        </div>
    )

}

export default Finish;