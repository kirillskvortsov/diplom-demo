import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function SupplierCatalogPage() {
    return(
        <div>
            <h3>Поставщики</h3>
            <Link to="/AnalyticsPage">
                    <Button>Аналитика</Button>
                </Link>
        </div>
    )
}

export default SupplierCatalogPage;