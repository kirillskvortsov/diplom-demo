import React from 'react';
import info from '../../info/navElementsInfo';

function Main() {
    return(
        <main className="main">
            <ul className="home-ul">
                {info.slice(1).map((element)=> 
                    <li className="home-li" key={element.id}>
                        <a href={element.anchor} className="home-a">
                            <img src={element.srcCard} alt={element.alt} className="home-img" />
                            <p className="home-p">{element.text}</p>
                        </a>
                    </li>
                )}
            </ul>
        </main>
    );
}

export default Main;