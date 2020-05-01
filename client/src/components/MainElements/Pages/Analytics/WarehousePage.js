import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import WarehouseTable from '../../Tables/WarehouseTable';

function WarehousePage() {
    const [area, changeArea] = useState(12000);
    const [areaUsed, changeAreaUsed] = useState(6000);

    return(
        <main className="main main-analytics">
            <div className="analytics-headers">
                <h1 className="page-header">Вместимость склада</h1>
                <h2 className="sub-header height-48 next-plan">До следующего планового заказа: 35 дней</h2>
            </div>
            <div className="order-info">
                <h3 className="sub-header order-header">Общая площадь склада: <span className="order-days">{area} м<sup>2</sup></span></h3>
                <h3 className="sub-header order-header">Занятая площадь: <span className="order-days">{areaUsed} м<sup>2</sup></span></h3>
                <h3 className="sub-header order-header">Склад заполнен на <span className="order-days">{areaUsed/area*100}%</span></h3>                
            </div>
            <WarehouseTable />
            <div className="analytics-footer">
                <Link to="/AnalyticsPage">
                        <Button>Аналитика</Button>
                </Link>
            </div>
        </main>
    );
}

export default WarehousePage;