import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function ClientCatalogPage() {
    return(
        <div>
            <h3>Клиенты</h3>
            <Link to="/AnalyticsPage">
                    <Button>Аналитика</Button>
                </Link>
        </div>
    )
}

export default ClientCatalogPage;