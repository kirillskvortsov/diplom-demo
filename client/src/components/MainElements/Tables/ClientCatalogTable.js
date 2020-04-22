import React from 'react';
import { Table } from 'react-bootstrap';

function ClientCatalogTable(props) {
    return(
        <div className="table-container supplier-table-container">
            <Table striped bordered hover className="table">
                <thead>
                    <tr className="table-header">
                        <th>ФИО</th>
                        <th>Телефон</th>
                        <th>E-mail</th>
                        <th>Адрес</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Скворцов Кирилл Александрович</td>
                        <td>89876543210</td>
                        <td>kirill@mail.ru</td>
                        <td>РТ, Казань, Яруллина 6</td>
                    </tr>
                    <tr>
                        <td>Иванов Иван Иванович</td>
                        <td>89871234560</td>
                        <td>ivan@mail.ru</td>
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

export default ClientCatalogTable;