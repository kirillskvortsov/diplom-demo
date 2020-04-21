import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function DemandPrognosisPage() {
    return(
        <div>
            <h3>Прогноз спроса</h3>
            <Link to="/AnalyticsPage">
                    <Button>Аналитика</Button>
                </Link>
        </div>
    )
}

export default DemandPrognosisPage;