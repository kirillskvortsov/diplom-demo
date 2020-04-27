import React from 'react';
import { Table } from 'react-bootstrap';

function SupplierFormTable(props) {
    return(
        <div className="table-container rush-form-table-container">
            <Table bordered className="table">
                <thead>
                    <tr>
                        <th>Артикул</th>
                        <th>Описание</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>Сумма</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data !== undefined ? props.data.map((row, index) => {
                        const { id, art, col, desc, price, selected } = row;
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

export default SupplierFormTable;