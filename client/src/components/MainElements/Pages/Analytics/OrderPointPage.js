import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import OrderPointTable from '../../Tables/OrderPointTable';
import OrderPointModal from '../../Modals/OrderPointModal';

function OrderPointPage() {
    const [modalShow, setModalShow] = useState(false);
    const [days, changeDays] = useState(40);

    return(
        <main className="main main-analytics">
            <div className="analytics-headers">
                <h1 className="page-header">Точка заказа</h1>
                <h2 className="sub-header height-48 next-plan">До следующего планового заказа: 35 дней</h2>
            </div>
            <div className="order-info">
                <h3 className="sub-header order-header">Заказ формируется каждые <span className="order-days">{days} дней</span></h3>
            </div>
            <OrderPointTable />
            <OrderPointModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="analytics-footer">
                <Button className="analytics-refresh"  onClick={() => setModalShow(true)} >Обновить</Button>
                <Link to="/AnalyticsPage">
                        <Button>Аналитика</Button>
                </Link>
            </div>
        </main>
    );
}

export default OrderPointPage;