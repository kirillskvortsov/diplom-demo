import React from 'react';
import { Table } from 'react-bootstrap';

function RushFormTable(props) {
    return(
        <div className="table-container rush-form-table-container">
            <Table bordered hover className="table">
                <thead>
                    <tr>
                        <th>Артикул</th>
                        <th>Описание</th>
                        <th>Количество</th>
                        <th>Поставщик</th>
                        <th>Цена</th>
                        <th>Сумма</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0003758</td>
                        <td>Воздухозавод SKODA OCTAVIA A7 2013</td>
                        <td>1</td>
                        <td>Склад</td>
                        <td>692 руб.</td>
                        <td>692 руб.</td>
                    </tr>
                    <tr>
                        <td>0103728</td>
                        <td>Кронштейн фар SKODA OCTAVIA A7 2013</td>
                        <td>2</td>
                        <td>Склад</td>
                        <td>418 руб.</td>
                        <td>836 руб.</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default RushFormTable;