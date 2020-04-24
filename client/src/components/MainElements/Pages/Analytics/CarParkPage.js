import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CarParkTable from '../../Tables/CarParkTable';

function CarParkPage() {
    return(
        <main className="main main-analytics">
            <div className="grid-container search-entire-page">
                <div className="grid-container search-container">
                    <h1 className="page-header">Структура автопарка</h1>
                    <div className="search-inputs">
                        <input className="form-control margin-top-10 search-input" type="search" placeholder="Марка, модель или год выпуска" />
                        <Button className="search-btn margin-top-10">Поиск</Button>
                    </div>
                </div>
            </div>
            <CarParkTable />
            <div className="analytics-footer">
                <Link to="/AnalyticsPage">
                    <Button>Аналитика</Button>
                </Link>
            </div>
        </main>
    );
}

export default CarParkPage;