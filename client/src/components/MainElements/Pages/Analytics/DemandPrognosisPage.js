import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import DemandPrognosisTable from '../../Tables/DemandPrognosisTable';

function DemandPrognosisPage() {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1  > 9 ? currentDate.getMonth() + 1 : "0" + (currentDate.getMonth() + 1);
    const year = currentDate.getFullYear();
    const date = year + "-" + month;

    return(
        <main className="main main-analytics">
            <div className="analytics-headers">
                <h1 className="page-header">Прогноз спроса</h1>
                <h2 className="sub-header height-48 next-plan">До следующего планового заказа: 35 дней</h2>
            </div>
            <Form className="demand-form">
                <Form.Group className="demand-group">
                    <Form.Control className="demand-input" type="month" defaultValue={date} disabled/>
                    <Form.Label className="demand-label">Период</Form.Label>
                </Form.Group>
                <Form.Group className="demand-group">
                    <Form.Control className="demand-input" type="text" value="0.98" disabled />
                    <Form.Label className="demand-label">Сезонный коэффициент</Form.Label>
                </Form.Group>
                <Form.Group className="demand-group">
                    <Form.Control className="demand-input" type="text" value="40 дней" disabled />
                    <Form.Label className="demand-label">Точка заказа</Form.Label>
                </Form.Group>
            </Form>
            <h4 className="demand-table-header">Список запчастей</h4>
            <DemandPrognosisTable />
            <div className="analytics-footer">
                <Link to="/AnalyticsPage">
                        <Button>Аналитика</Button>
                </Link>
            </div>
        </main>
    );
}

export default DemandPrognosisPage;