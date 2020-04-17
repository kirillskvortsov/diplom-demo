import React from 'react';

function NavElement(props) {
    return(
        <li class="nav-li">
            <a href="#" class="nav-a">
                <img class="nav-img" src={props.src} alt={props.alt}/>
                <p>{props.text}</p>
            </a>
        </li>
    );
}

export default NavElement;