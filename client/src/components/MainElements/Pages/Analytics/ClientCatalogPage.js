import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ClientCatalogTable from '../../Tables/ClientCatalogTable';
import ClientCatalogModal from '../../Modals/ClientCatalogModal';

function ClientCatalogPage() {
    const [modalShow, setModalShow] = useState(false);

    return(
        <main className="main main-rush">
            <div className="search-headers">
                <h1 className="page-header">Клиенты</h1>
            </div>
            <div className="rush-page-searchbar">
                <Button onClick={() => setModalShow(true)} className="rush-btn rush-btn-new">Новый клиент</Button>
                <Button className="rush-btn rush-btn-edit">Редактировать</Button>
                <Button className="rush-btn rush-btn-delete">Удалить</Button>
                <input className="form-control rush-input" type="search" placeholder="ФИО, номер телефона или e-mail" />
                <Button className="rush-btn rush-btn-search">Поиск</Button>
            </div>
            <ClientCatalogTable />
            <ClientCatalogModal 
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

export default ClientCatalogPage;