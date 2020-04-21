import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function WarehousePage() {
    return(
        <div>
            <h3>Вместимость склада</h3>
            <Link to="/AnalyticsPage">
                    <Button>Аналитика</Button>
                </Link>
        </div>
    )
}

export default WarehousePage;