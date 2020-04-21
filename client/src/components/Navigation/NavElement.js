import React from 'react';
import { Link } from "react-router-dom";

function NavElement(props) {
    return(
        <li className="nav-li">
            <Link to={props.anchor} className="nav-a">
                <img className="nav-img" src={props.src} alt={props.alt}/>
                <p>{props.text}</p>
            </Link>
        </li>
    );
}

export default NavElement;