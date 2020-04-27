import React from 'react';
import { Table } from 'react-bootstrap';

function SupplierTable(props) {
    return(
        <div className="table-container supplier-table-container">
            <Table striped bordered hover className="table">
                <thead>
                    <tr className="table-header">
                        <th className="width-100 vertical-align">Номер заказа</th>
                        <th className="width-100 vertical-align">Дата заказа</th>
                        <th className="width-150 vertical-align">Поставщик</th>
                        <th className="width-150 vertical-align">Договор</th>
                        <th className="width-100 vertical-align">Сумма</th>
                        <th className="width-100 vertical-align">Дата доставки</th>
                        <th className="width-200 vertical-align">Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((row, index) => {
                        const { id, number, date1, date2, contract, supplier, status, selected } = row;
                        let total = 0;
                        row.parts.map(item => total += item.col * item.price);
                        let color = "";
                        if (status === "Отправлено")
                            color = "green";
                        else if (status === "Ожидает отправки")
                            color = "orange";
                        else 
                            color = "red"
                        return (
                            <tr className={selected ? "table-row-selected" : "table-row-non-selected"} key={id} onClick={props.handleRowClick.bind(this, id)}>
                                <td>{number}</td>
                                <td><input className="table-input" type="date" value={date1} disabled /></td>
                                <td>{supplier}</td>
                                <td>{contract}</td>
                                <td>{total} руб.</td>
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

export default SupplierTable;