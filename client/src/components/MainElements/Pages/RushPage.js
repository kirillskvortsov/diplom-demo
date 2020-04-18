import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import RushTable from '../Tables/RushTable.js';
import RushModal from '../Modals/RushModal';

function RushPage() {
    const [modalShow, setModalShow] = useState(true);

    return(
        <main className="main main-rush">
            <h1 className="page-header">Срочные заказы</h1>
            <div className="rush-page-searchbar">
                <Button onClick={() => setModalShow(true)} className="rush-btn rush-btn-new">Новый заказ</Button>
                <Button className="rush-btn rush-btn-edit">Редактировать</Button>
                <Button className="rush-btn rush-btn-delete">Удалить</Button>
                <input className="form-control rush-input" type="search" placeholder="Номер заказа, дата или ФИО заказчика" />
                <Button className="rush-btn rush-btn-search">Поиск</Button>
            </div>
            <RushTable />
            <RushModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </main>
    );
}

export default RushPage;