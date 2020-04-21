import React from 'react';
import { Link } from "react-router-dom";
import info from '../../info/navElementsInfo';

function HomePage() {
    return(
        <main className="main">
            <ul className="home-ul">
                {info.slice(1).map((element)=> 
                    <li className="home-li" key={element.id}>
                        <Link to={element.anchor} className="home-a">
                            <img src={element.srcCard} alt={element.alt} className="home-img" />
                            <p className="home-p">{element.text}</p>
                        </Link>
                    </li>
                )}
            </ul>
        </main>
    );
}

export default HomePage;