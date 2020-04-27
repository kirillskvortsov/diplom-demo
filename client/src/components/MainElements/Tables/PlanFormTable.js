import React from 'react';
import { Table } from 'react-bootstrap';

function PlanFormTable(props) {
    return(
        <div className="table-container rush-form-table-container">
            <Table bordered className="table">
                <thead>
                    <tr>
                        <th>Описание</th>
                        <th>Артикул</th>
                        <th>Количество</th>
                        <th>Поставщик</th>
                        <th>Сроки доставки</th>
                        <th>Цена руб.</th>
                        <th>Сумма руб.</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data !== undefined ? props.data.map((row, index) => {
                        const { id, art, col, desc, price, date, supp, selected } = row;
                        return (
                            <tr key={id} className={selected ? "table-row-selected" : "table-row-non-selected"} onClick={props.handleFormRowClick.bind(this, id)}>
                                <td>
                                    <input
                                        disabled={selected ? false : true}
                                        type="text"
                                        className="table-input"
                                        onChange={props.handleTableChange}
                                        value={desc}
                                        name="desc"
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        disabled={selected ? false : true}
                                        type="text"
                                        className="table-input"
                                        onChange={props.handleTableChange}
                                        value={art}
                                        name="art"
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        disabled={selected ? false : true}
                                        type="number"
                                        className="table-input"
                                        onChange={props.handleTableChange}
                                        value={col}
                                        name="col"
                                        required
                                    />
                                </td>
                                <td>
                                    <select
                                        disabled={selected ? false : true}
                                        className="table-input"
                                        onChange={props.handleTableChange}
                                        value={supp}
                                        name="supp"
                                        required
                                    >
                                        <option value="ЕвроАвто">ЕвроАвто</option>
                                        <option value="ТТС">ТТС</option>
                                    </select>
                                </td>
                                <td>
                                    <input
                                        disabled={selected ? false : true}
                                        type="date"
                                        className="table-input"
                                        onChange={props.handleTableChange}
                                        value={date}
                                        name="date"
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        disabled={selected ? false : true}
                                        type="number"
                                        className="table-input"
                                        onChange={props.handleTableChange}
                                        value={price}
                                        name="price"
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        disabled
                                        type="number"
                                        className="table-input"
                                        onChange={props.handleTableChange}
                                        value={price * col}
                                        name="sum"
                                        required
                                    />
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

export default PlanFormTable;