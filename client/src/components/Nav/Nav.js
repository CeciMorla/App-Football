import React from "react";
import {Link} from 'react-router-dom';
import img from './img/2.png';
import s from './Nav.module.css';

const Nav = ()=>{
    return(
        <div className={s.nav}>
            <Link to='/'>
            <img src={img} alt="img" className={s.img}/>
            </Link>
            <div className="btn-group" role="group" aria-label="Basic example" className={s.btn}>
            <Link to='/live'>
                <button type="button" class="btn btn-light">LIVE</button>
            </Link>
            <Link to='/next'>
                <button type="button" class="btn btn-light">NEXT GAME</button>
            </Link>
            <Link to='/finish'>
                <button type="button" class="btn btn-light">FINISH GAME</button>
            </Link>
            </div>
        </div>
    )
}

export default Nav;