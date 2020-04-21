import React from 'react';
import { Link } from "react-router-dom";
import info from '../../info/analyticsElementsInfo';

function AnalyticsPage() {
    return(
        <main className="main main-analytics">
            <div className="analytics-headers">
                <h1 className="page-header">Аналитика</h1>
                <h2 className="sub-header height-48 next-plan">До следующего планового заказа: 35 дней</h2>
            </div>
            <ul className="analytics-ul">
                {info.map((element)=> 
                    <Link to={element.anchor} className="analytics-a">
                        <li className="analytics-li" key={element.id}>
                            <img src={element.srcCard} alt={element.alt} className="analytics-img" />
                            <p className="analytics-p">{element.text}</p>
                        </li>
                    </Link>
                )}
            </ul>
        </main>
    );
}

export default AnalyticsPage;