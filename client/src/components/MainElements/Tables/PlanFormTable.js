import React from 'react';
import { Table } from 'react-bootstrap';

function PlanFormTable(props) {
    return(
        <div className="table-container rush-form-table-container">
            <Table bordered className="table">
                <thead>
                    <tr>
                        <th>Артикул</th>
                        <th>Описание</th>
                        <th>Количество</th>
                        <th>Поставщик</th>
                        <th>Сроки доставки</th>
                        <th>Цена</th>
                        <th>Сумма</th>
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
                        <td><input type="text" className="table-input" /></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="table-input" /></td>
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

export default PlanFormTable;