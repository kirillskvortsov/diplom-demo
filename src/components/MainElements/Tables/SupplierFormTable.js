import React from 'react';
import { Table } from 'react-bootstrap';

function SupplierFormTable(props) {
    const parts = JSON.parse(localStorage.getItem('searchTable'));
    return (
        <div className="table-container rush-form-table-container">
            <Table bordered className="table">
                <thead>
                    <tr>
                        <th>Артикул</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>Сумма</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data !== undefined ? props.data.map((row, index) => {
                        const { id, art, col, price, selected } = row;
                        return (
                            <tr key={id} className={selected ? "table-row-selected" : "table-row-non-selected"} onClick={props.handleFormRowClick.bind(this, id)}>
                                <td>
                                    <input
                                        disabled={selected ? false : true}
                                        className="table-input"
                                        onChange={props.handleTableChange}
                                        value={art}
                                        name="art"
                                        required
                                        type="text"
                                        list="data"
                                        autoComplete="off"
                                    />
                                    <datalist id="data">
                                        {parts.map(i => <option key={i.art} value={i.art}>{i.desc}</option>)}
                                    </datalist>
                                </td>
                                <td>
                                    <input
                                        disabled={selected ? false : true}
                                        type="number"
                                        min="1"
                                        className="table-input"
                                        onChange={props.handleTableChange}
                                        value={col}
                                        name="col"
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
                        </tr>
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default SupplierFormTable;