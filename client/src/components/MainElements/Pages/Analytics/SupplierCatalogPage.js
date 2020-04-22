import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import SupplierCatalogTable from '../../Tables/SupplierCatalogTable';
import SupplierCatalogModal from '../../Modals/SupplierCatalogModal';

function SupplierCatalogPage() {
    const [modalShow, setModalShow] = useState(false);

    return(
        <main className="main main-rush">
            <div className="search-headers">
                <h1 className="page-header">Поставщики</h1>
            </div>
            <div className="rush-page-searchbar">
                <Button onClick={() => setModalShow(true)} className="rush-btn rush-btn-new">Новый поставщик</Button>
                <Button className="rush-btn rush-btn-edit">Редактировать</Button>
                <Button className="rush-btn rush-btn-delete">Удалить</Button>
                <input className="form-control rush-input" type="search" placeholder="ФИО, номер телефона или e-mail" />
                <Button className="rush-btn rush-btn-search">Поиск</Button>
            </div>
            <SupplierCatalogTable />
            <SupplierCatalogModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="supplier-footer">
                <Link to="/AnalyticsPage">
                    <Button>Аналитика</Button>
                </Link>
            </div>
        </main>
    );
}

export default SupplierCatalogPage;