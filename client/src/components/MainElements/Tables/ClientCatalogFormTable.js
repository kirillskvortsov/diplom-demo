import React from 'react';
import { Table } from 'react-bootstrap';

function ClientCatalogFormTable(props) {
    return (
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
                    {props.data !== undefined ? props.data.map((row, index) => {
                        const { id, number, date1, supp, sum, date2, status, selected } = row;
                        return (
                            <tr key={id} className={selected ? "table-row-selected" : "table-row-non-selected"} onClick={props.handleFormRowClick.bind(this, id)}>
                                <td>
                                    <input
                                        disabled={selected ? false : true}
                                        type="text"
                                        className="table-input"
                                        onChange={props.handleTableChange}
                                        value={number}
                                        name="number"
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        disabled={selected ? false : true}
                                        type="date"
                                        className="table-input"
                                        onChange={props.handleTableChange}
                                        value={date1}
                                        name="date1"
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        disabled={selected ? false : true}
                                        type="text"
                                        className="table-input"
                                        onChange={props.handleTableChange}
                                        value={supp}
                                        name="supp"
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        disabled={selected ? false : true}
                                        type="number"
                                        className="table-input"
                                        onChange={props.handleTableChange}
                                        value={sum}
                                        name="sum"
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        disabled={selected ? false : true}
                                        type="date"
                                        className="table-input"
                                        onChange={props.handleTableChange}
                                        value={date2}
                                        name="date2"
                                        required
                                    />
                                </td>
                                <td>
                                    <select
                                        disabled={selected ? false : true}
                                        className="table-input"
                                        onChange={props.handleTableChange}
                                        value={status}
                                        name="status"
                                        required
                                    >
                                        <option value="Получено">Получено</option>
                                        <option value="Готово к получению">Готово к получению</option>
                                        <option value="Не получено">Не получено</option>
                                    </select>
                                </td>
                            </tr>
                        );
                    }) :
                        <tr>
                            <td><input type="text" className="table-input" /></td>
                            <td><input type="text" className="table-input" /></td>
                            <td><input type="text" className="table-input" /></td>
                            <td><input type="text" className="table-input" /></td>
                            <td><input type="text" className="table-input" /></td>
                            <td><input type="text" className="table-input" /></td>
                        </tr>
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default ClientCatalogFormTable;