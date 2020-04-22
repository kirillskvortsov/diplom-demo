import React from 'react';
import { Table } from 'react-bootstrap';

function SupplierCatalogFormTable(props) {
    return(
        <div className="table-container rush-form-table-container">
            <Table bordered className="table">
                <thead>
                    <tr>
                        <th>Номер договора</th>
                        <th>Дата</th>
                        <th>Срок действия</th>
                        <th>Статаус</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
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
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default SupplierCatalogFormTable;