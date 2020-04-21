import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import SupplierTable from '../Tables/SupplierTable.js';
import SupplierModal from '../Modals/SupplierModal';

function SupplierPage() {
    const [modalShow, setModalShow] = useState(false);

    return(
        <main className="main main-rush">
            <div className="search-headers">
                <h1 className="page-header">Заказы поставщику</h1>
                <h2 className="sub-header height-48 next-plan">До следующего планового заказа: 35 дней</h2>
            </div>
            <div className="rush-page-searchbar">
                <Button onClick={() => setModalShow(true)} className="rush-btn rush-btn-new">Новый заказ</Button>
                <Button className="rush-btn rush-btn-edit">Редактировать</Button>
                <Button className="rush-btn rush-btn-delete">Удалить</Button>
                <input className="form-control rush-input" type="search" placeholder="Номер заказа, поставщик или дата" />
                <Button className="rush-btn rush-btn-search">Поиск</Button>
            </div>
            <SupplierTable />
            <SupplierModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="supplier-footer">
                <Link to="/IncomingPage">
                    <Button>Приходные накладные</Button>
                </Link>
            </div>
        </main>
    );
}

export default SupplierPage;