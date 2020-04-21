import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function SeasonPage() {
    return(
        <div>
            <h3>Сезонный коэффициент</h3>
            <Link to="/AnalyticsPage">
                    <Button>Аналитика</Button>
                </Link>
        </div>
    )
}

export default SeasonPage;