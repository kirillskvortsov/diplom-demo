import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import SpareCatalogTable from '../../Tables/SpareCatalogTable';
import SpareCatalogModal from '../../Modals/SpareCatalogModal';

function SpareCatalogPage() {
    const [modalShow, setModalShow] = useState(false);

    return(
        <main className="main main-rush">
            <div className="search-headers">
                <h1 className="page-header">Запчасти</h1>
            </div>
            <div className="rush-page-searchbar">
                <Button onClick={() => setModalShow(true)} className="rush-btn rush-btn-new">Добавить запчасть</Button>
                <Button className="rush-btn rush-btn-edit">Редактировать</Button>
                <Button className="rush-btn rush-btn-delete">Удалить</Button>
                <input className="form-control rush-input" type="search" placeholder="Номер детали, артикул или VIN-номер" />
                <Button className="rush-btn rush-btn-search">Поиск</Button>
            </div>
            <SpareCatalogTable />
            <SpareCatalogModal 
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

export default SpareCatalogPage;