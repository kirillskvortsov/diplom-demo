import React from 'react';
import { Table } from 'react-bootstrap';

function RushTable(props) {
    

    return(
        <div className="table-container rush-table-container">
            <Table id="rushTable" striped bordered hover className="table">
                <thead>
                    <tr>
                        <th className="width-100 vertical-align">Номер заказа</th>
                        <th className="width-100 vertical-align">Дата заказа</th>
                        <th className="width-300 vertical-align">ФИО</th>
                        <th className="width-150 vertical-align">Сумма</th>
                        <th className="width-300 vertical-align">Поставщики</th>
                        <th className="width-100 vertical-align">Дата доставки</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((row, index) => {
                        const {id, number, date1, date2, name, totalSum, supplier, status, selected} = row;
                        return(
                            <tr className={selected ? "table-row-selected" : "table-row-non-selected"} key={id} onClick={props.handleRowClick.bind(this, id)}>
                                <td>{number}</td>
                                <td>{date1}</td>
                                <td>{name}</td>
                                <td>{totalSum} руб.</td>
                                <td>{supplier}</td>
                                <td>{date2}</td>
                                <td className={status === "Доставлено" ? "green" : "orange"}>{status}</td>
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