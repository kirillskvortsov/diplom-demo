import React from 'react';
import { Table } from 'react-bootstrap';

function SupplierCatalogTable(props) {
    return(
        <div className="table-container supplier-table-container">
            <Table striped bordered hover className="table">
                <thead>
                    <tr className="table-header">
                        <th>Название</th>
                        <th>ИНН</th>
                        <th>Телефон</th>
                        <th>Адрес</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ЕвроАвто</td>
                        <td>1987236487923</td>
                        <td>89876543210</td>
                        <td>РТ, Казань, Яруллина 6</td>
                    </tr>
                    <tr>
                        <td>ТТС</td>
                        <td>9871263545234</td>
                        <td>89871234560</td>
                        <td>РТ, Казань, Вахитова 21</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default SupplierCatalogTable;