import React from 'react';
import { Table } from 'react-bootstrap';

function ClientCatalogFormTable(props) {
    return(
        <div className="table-container rush-form-table-container">
            <Table bordered className="table">
                <thead>
                    <tr>
                        <th>Номер заказа</th>
                        <th>Дата заказа</th>
                        <th>Поставщики</th>
                        <th>Сумма</th>
                        <th>Дата доставки</th>
                        <th>Статаус</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default ClientCatalogFormTable;