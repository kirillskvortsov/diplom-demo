import React from 'react';
import NavElement from './NavElement'
import info from './navElementsInfo'

function Navbar() {
    return(
        <nav class="nav-nav">
            <ul class="nav-ul">
                {info.map((element) => <NavElement alt={element.alt} src={element.src} text={element.text}/>)}
            </ul>
        </nav>
    );
}

export default Navbar;