import React from 'react';
import { Table } from 'react-bootstrap';

function SupplierTable(props) {
    return(
        <div className="table-container supplier-table-container">
            <Table striped bordered hover className="table">
                <thead>
                    <tr className="table-header">
                        <th>Номер заказа</th>
                        <th>Дата заказа</th>
                        <th>Поставщик</th>
                        <th>Договор</th>
                        <th>Сумма</th>
                        <th>Дата доставки</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>П000341</td>
                        <td>01.02.2020</td>
                        <td>ЕвроАвто</td>
                        <td>Договор № 341</td>
                        <td>56 345 руб.</td>
                        <td>07.02.2020</td>
                        <td className="green">Отправлено</td>
                    </tr>
                    <tr>
                        <td>П000342</td>
                        <td>01.02.2020</td>
                        <td>VAG</td>
                        <td>Договор № 342</td>
                        <td>117 412 руб.</td>
                        <td>09.02.2020</td>
                        <td className="orange">Ожидает проверки</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
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
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
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
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
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
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default SupplierTable;