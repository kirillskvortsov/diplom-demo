import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PlanTable from '../Tables/PlanTable.js';
import PlanModal from '../Modals/PlanModal';

function PlanPage() {
    const [modalShow, setModalShow] = useState(false);

    return(
        <main className="main main-rush">
            <div className="search-headers">
                <h1 className="page-header">Плановые заказы</h1>
                <h2 className="sub-header height-48 next-plan">До следующего планового заказа: 35 дней</h2>
            </div>
            <div className="rush-page-searchbar">
                <Button onClick={() => setModalShow(true)} className="rush-btn rush-btn-new">Новый заказ</Button>
                <Button className="rush-btn rush-btn-edit">Редактировать</Button>
                <Button className="rush-btn rush-btn-delete">Удалить</Button>
                <input className="form-control rush-input" type="search" placeholder="Номер заказа, поставщик или дата" />
                <Button className="rush-btn rush-btn-search">Поиск</Button>
            </div>
            <PlanTable />
            <PlanModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </main>
    );
}

export default PlanPage;