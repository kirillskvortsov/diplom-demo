import React from 'react';
import { Table } from 'react-bootstrap';

function RushFormTable(props) {
    return(
        <div className="table-container rush-form-table-container">
            <Table bordered className="table">
                <thead>
                    <tr>
                        <th>Артикул</th>
                        <th>Описание</th>
                        <th>Количество</th>
                        <th>Поставщик</th>
                        <th>Цена</th>
                        <th>Сумма</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data !== undefined ? props.data.map((row, index) => {
                        const {id, art, col, desc, price, sum, supp} = row;
                        return(
                            <tr key={id}>
                                <td>{art}</td>
                                <td>{desc}</td>
                                <td>{col}</td>
                                <td>{supp}</td>
                                <td>{price} руб.</td>
                                <td>{sum} руб.</td>
                            </tr>
                        );
                    }):
                    <tr>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                    </tr>
                    }
                    <tr>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                        <td><input type="text" className="table-input" /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default RushFormTable;