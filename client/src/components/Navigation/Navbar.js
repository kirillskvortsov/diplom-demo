import React from 'react';
import NavElement from './NavElement';
import info from '../info/navElementsInfo';

function Navbar() {
    return(
        <nav className="nav-nav">
            <ul className="nav-ul">
                {info.map((element) => 
                <NavElement 
                    key={element.id}
                    alt={element.alt} 
                    src={element.src} 
                    text={element.text} 
                    anchor={element.anchor}
                />)}
            </ul>
        </nav>
    );
}

export default Navbar;