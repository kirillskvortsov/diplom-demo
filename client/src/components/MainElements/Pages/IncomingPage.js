import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import IncomingTable from '../Tables/IncomingTable.js';
import IncomingModal from '../Modals/IncomingModal';

function IncomingPage() {
    const [modalShow, setModalShow] = useState(false);

    return(
        <main className="main main-rush">
            <div className="search-headers">
                <h1 className="page-header">Приходные накладные</h1>
                <h2 className="sub-header height-48 next-plan">До следующего планового заказа: 35 дней</h2>
            </div>
            <div className="rush-page-searchbar">
                <Button onClick={() => setModalShow(true)} className="rush-btn rush-btn-new">Новый заказ</Button>
                <Button className="rush-btn rush-btn-edit">Редактировать</Button>
                <Button className="rush-btn rush-btn-delete">Удалить</Button>
                <input className="form-control rush-input" type="search" placeholder="Номер заказа, поставщик или дата" />
                <Button className="rush-btn rush-btn-search">Поиск</Button>
            </div>
            <IncomingTable />
            <IncomingModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="supplier-footer">
                <Link to="/SupplierPage">
                    <Button>Заказы поставщику</Button>
                </Link>
            </div>
        </main>
    );
}

export default IncomingPage;