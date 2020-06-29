import React from 'react';
import { Table } from 'react-bootstrap';

function SupplierCatalogFormTable(props) {
    return (
        <div className="table-container rush-form-table-container">
            <Table bordered className="table">
                <thead>
                    <tr>
                        <th className="width-100 vertical-align">Артикул</th>
                        <th className="width-300 vertical-align">Описание</th>
                        <th className="width-100 vertical-align">Цена, руб.</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data !== undefined ? props.data.map((row, index) => {
                        const { art, desc, price, selected } = row;
                        return (
                            <tr key={art} className={selected ? "table-row-selected" : "table-row-non-selected"} onClick={props.handleFormRowClick.bind(this, art)}>
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
                                        type="number"
                                        min="1"
                                        className="table-input"
                                        onChange={props.handleTableChange}
                                        value={price}
                                        name="price"
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

export default SupplierCatalogFormTable;