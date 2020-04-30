import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import SeasonTable from '../../Tables/SeasonTable';

function SeasonPage() {
    const coef = useState(0.97);

    return(
        <main className="main main-analytics">
            <div className="analytics-headers">
                <h1 className="page-header">Сезонный коэффициент</h1>
                <h2 className="sub-header height-48 next-plan">До следующего планового заказа: 35 дней</h2>
            </div>
            <div className="order-info">
                <h3 className="sub-header order-header">Сезонный коэффициент на текущий период: <span className="order-days">{coef}</span></h3>               
            </div>
            <SeasonTable />
            <div className="analytics-footer">
                <Link to="/AnalyticsPage">
                        <Button>Аналитика</Button>
                </Link>
            </div>
        </main>
    );
}

export default SeasonPage;