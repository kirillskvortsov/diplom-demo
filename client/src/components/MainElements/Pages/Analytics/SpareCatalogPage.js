import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function SpareCatalogPage() {
    return(
        <div>
            <h3>Запчасти</h3>
            <Link to="/AnalyticsPage">
                    <Button>Аналитика</Button>
                </Link>
        </div>
    )
}

export default SpareCatalogPage;