import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function OrderPointPage() {
    return(
        <div>
            <h3>Точка заказа</h3>
            <Link to="/AnalyticsPage">
                    <Button>Аналитика</Button>
                </Link>
        </div>
    )
}

export default OrderPointPage;