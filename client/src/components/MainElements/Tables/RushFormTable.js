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
                        const {id, art, col, desc, price, sum, supp, selected} = row;
                        return(
                            <tr key={id} className={selected ? "table-row-selected" : "table-row-non-selected"} onClick={props.handleFormRowClick.bind(this, id)}>
                                <td>
                                    <input 
                                        type="text" 
                                        className="table-input" 
                                        onChange={props.handleTableChange} 
                                        value={art}
                                        name="art"
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        className="table-input" 
                                        onChange={props.handleTableChange} 
                                        value={desc}
                                        name="desc"
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        className="table-input" 
                                        onChange={props.handleTableChange} 
                                        value={col}
                                        name="col"
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        className="table-input" 
                                        onChange={props.handleTableChange} 
                                        value={supp}
                                        name="supp"
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        className="table-input" 
                                        onChange={props.handleTableChange} 
                                        value={price}
                                        name="price"
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        className="table-input" 
                                        onChange={props.handleTableChange} 
                                        value={sum}
                                        name="sum"
                                    />
                                </td>
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
                </tbody>
            </Table>
        </div>
    );
}

export default RushFormTable;