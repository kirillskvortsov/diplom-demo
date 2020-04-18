import React from 'react';
import { Button } from 'react-bootstrap';

function SearchBar() {
    return(
        <div className="grid-container search-entire-page">
            <div className="grid-container search-container">
                <h1 className="page-header">Поиск запчастей</h1>
                <div className="search-inputs">
                    <input className="form-control search-input" type="search" placeholder="Номер детали, артикул или VIN-номер" />
                    <Button className="search-btn">Поиск</Button>
                </div>
            </div>
            <div className="grid-container filters-container">
                <h2 className="sub-header height-48">Фильтры</h2>
                <div className="filter-inputs">
                    <input className="form-control input-mark" type="search" placeholder="Марка" />
                    <input className="form-control input-model" type="search" placeholder="Модель" />
                    <input className="form-control input-type" type="search" placeholder="Тип" />
                    <Button className="apply-btn">Применить</Button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;