import React, {useEffect} from "react";
import Nav from "../Nav/Nav";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {fixtureNext} from '../../actions/index.js';
import TablesNext from '../TablesNext/TablesNext.js';



const Next = ()=>{
    const dispatch = useDispatch();
    const next = useSelector((state) => state.next);
    
    
    useEffect(()=>{
        dispatch(fixtureNext())
    },[])

    return(
        <div>
            <Nav/>
            <TablesNext next={next}/>
        </div>
    )

}

export default Next;