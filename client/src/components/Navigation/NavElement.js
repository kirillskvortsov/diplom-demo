import React from 'react';

function NavElement(props) {
    return(
        <li className="nav-li">
            <a href={props.anchor} className="nav-a">
                <img className="nav-img" src={props.src} alt={props.alt}/>
                <p>{props.text}</p>
            </a>
        </li>
    );
}

export default NavElement;