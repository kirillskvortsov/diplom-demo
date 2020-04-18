import React from 'react';
import { Table } from 'react-bootstrap';

function TasksFormTable(props) {
    return(
        <div className="table-container tasks-table-container">
            <Table bordered hover className="table">
                <thead>
                    <tr>
                        <th>Номер заказа</th>
                        <th>Дата заказа</th>
                        <th>Поставщики</th>
                        <th>Сумма</th>
                        <th>Дата доставки</th>
                        <th>Сататус</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0009090</td>
                        <td>14.02.2020</td>
                        <td>ТТС</td>
                        <td>2498 руб.</td>
                        <td>17.02.2020</td>
                        <td className="green">Готово к получению</td>
                    </tr>
                    <tr>
                        <td>0002514</td>
                        <td>18.02.2020</td>
                        <td>ЕвроАвто</td>
                        <td>1073 руб.</td>
                        <td>19.02.2020</td>
                        <td className="orange">Доставлено</td>
                    </tr>
                    <tr>
                        <td>0002515</td>
                        <td>24.02.2020</td>
                        <td>ЕвроАвто, ТТС</td>
                        <td>5682 руб.</td>
                        <td>29.02.2020</td>
                        <td className="grey">Ожидание отгрузки</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default TasksFormTable;