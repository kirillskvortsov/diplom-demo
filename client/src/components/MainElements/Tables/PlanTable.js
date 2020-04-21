import React from 'react';
import { Table } from 'react-bootstrap';

function PlanTable(props) {
    return(
        <div className="table-container rush-table-container">
            <Table striped bordered hover className="table">
                <thead>
                    <tr>
                        <th>Номер заказа</th>
                        <th>Дата заказа</th>
                        <th>Сумма</th>
                        <th>Поставщики</th>
                        <th>Дата доставки</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>П00031</td>
                        <td>01.02.2020</td>
                        <td>96 345 руб.</td>
                        <td>VAG, ЕвроАвто</td>
                        <td>07.02.2020</td>
                        <td className="green">Получено, проверено</td>
                    </tr>
                    <tr>
                        <td>П00032</td>
                        <td>01.03.2020</td>
                        <td>97 412 руб.</td>
                        <td>VAG, ЕвроАвто</td>
                        <td>06.03.2020</td>
                        <td className="orange">Не получено</td>
                    </tr>
                    <tr>
                        <td>П00033</td>
                        <td>01.04.2020</td>
                        <td>162 412 руб.</td>
                        <td>VAG, ЕвроАвто</td>
                        <td>04.04.2020</td>
                        <td className="red">Доставлено, ожидает проверки</td>
                    </tr>
                    <tr>
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
                    </tr>
                    <tr>
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
                    </tr>
                    <tr>
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
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default PlanTable;