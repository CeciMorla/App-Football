import React from "react";
import {Link} from 'react-router-dom';
import img from './img/2.png';

const Nav = ()=>{
    return(
        <div>
            <Link to='/'>
            <img src={img} alt="img"/>
            </Link>
            <Link to='/live'>
                <button>LIVE</button>
            </Link>
            <Link to='/next'>
                <button>NEXT GAME</button>
            </Link>
            <Link to='/finish'>
                <button>FINISH GAME</button>
            </Link>
        </div>
    )
}

export default Nav;