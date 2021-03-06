import React from 'react';
import { Table } from 'react-bootstrap';

function RushTable(props) {
    return (
        <div className="table-container rush-table-container">
            <Table id="rushTable" striped bordered hover className="table">
                <thead>
                    <tr>
                        <th className="width-100 vertical-align">Номер заказа</th>
                        <th className="width-100 vertical-align">Дата заказа</th>
                        <th className="width-200 vertical-align">ФИО</th>
                        <th className="width-150 vertical-align">Сумма</th>
                        <th className="width-200 vertical-align">Поставщики</th>
                        <th className="width-100 vertical-align">Дата доставки</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((row, index) => {
                        const { id, number, date1, date2, name, supplier, status, selected } = row;
                        let total = 0;
                        row.parts.map(item => total += item.col * item.price);
                        let suppliers = ""
                        let supplierArray = [];
                        if (supplier === "Поставщик") {
                            row.parts.map(item => supplierArray.push(item.supp));
                            supplierArray = [...new Set(supplierArray)];
                            suppliers = supplierArray.join(', ');
                        } else {
                            suppliers = "Склад";
                        }
                        let color = "";
                        if (status === "Доставлено")
                            color = "green";
                        else 
                            color = "orange"
                        return (
                            <tr className={selected ? "table-row-selected" : "table-row-non-selected"} key={id} onClick={props.handleRowClick.bind(this, id)}>
                                <td>{number}</td>
                                <td><input className="table-input" type="date" value={date1} disabled /></td>
                                <td>{name}</td>
                                <td>{total} руб.</td>
                                <td>{suppliers}</td>
                                <td><input className="table-input" type="date" value={date2} disabled /></td>
                                <td className={color}>{status}</td>
                            </tr>
                        );
                    })}
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

export default RushTable;