import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function CarParkPage() {
    return(
        <div>
            <h3>Структура автопарка в регионе</h3>
            <Link to="/AnalyticsPage">
                    <Button>Аналитика</Button>
                </Link>
        </div>
    )
}

export default CarParkPage;