import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

function TasksFormTable(props) {
    const [order1, setOrder1] = useState("0009090");
    const [orderDate1, setOrderDate1] = useState("2020-02-14");
    const [supplier1, setSupplier1] = useState("ТТС");
    const [sum1, setSum1] = useState("2498 руб.");
    const [delDate1, setDelDate1] = useState("2020-02-15");
    const [status1, setStatus1] = useState("ready");

    const [order2, setOrder2] = useState("0002514");
    const [orderDate2, setOrderDate2] = useState("2020-02-18");
    const [supplier2, setSupplier2] = useState("ЕвроАвто");
    const [sum2, setSum2] = useState("1073 руб.");
    const [delDate2, setDelDate2] = useState("2020-02-21");
    const [status2, setStatus2] = useState("delivered");

    const [order3, setOrder3] = useState("0002515");
    const [orderDate3, setOrderDate3] = useState("2020-02-24");
    const [supplier3, setSupplier3] = useState("ЕвроАвто, ТТС");
    const [sum3, setSum3] = useState("5127 руб.");
    const [delDate3, setDelDate3] = useState("2020-02-27");
    const [status3, setStatus3] = useState("waiting");

    return(
        <div className="table-container tasks-table-container">
            <Table bordered className="table">
                <thead>
                    <tr>
                        <th>Номер заказа</th>
                        <th>Дата заказа</th>
                        <th>Поставщики</th>
                        <th>Сумма</th>
                        <th>Дата доставки</th>
                        <th>Сататус</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" value={order1} onChange={(e) => setOrder1(e.target.value)} className="table-input" /></td>
                        <td><input type="date" value={orderDate1} onChange={(e) => setOrderDate1(e.target.value)} className="table-input" /></td>
                        <td><input type="text" value={supplier1} onChange={(e) => setSupplier1(e.target.value)}  className="table-input" /></td>
                        <td><input type="text" value={sum1}  onChange={(e) => setSum1(e.target.value)} className="table-input" /></td>
                        <td><input type="date" value={delDate1}  onChange={(e) => setDelDate1(e.target.value)} className="table-input" /></td>
                        <td>
                            <select defaultValue={status1} onChange={(e) => setStatus1(e.target.value)} className="table-input table-select">
                                <option value="ready">Готово к получению</option>
                                <option value="delivered">Доставлено</option>
                                <option value="waiting">Ожидание отгрузки</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="text" value={order2} onChange={(e) => setOrder2(e.target.value)} className="table-input" /></td>
                        <td><input type="date" value={orderDate2} onChange={(e) => setOrderDate2(e.target.value)} className="table-input" /></td>
                        <td><input type="text" value={supplier2} onChange={(e) => setSupplier2(e.target.value)}  className="table-input" /></td>
                        <td><input type="text" value={sum2}  onChange={(e) => setSum2(e.target.value)} className="table-input" /></td>
                        <td><input type="date" value={delDate2}  onChange={(e) => setDelDate2(e.target.value)} className="table-input" /></td>
                        <td>
                            <select defaultValue={status2} onChange={(e) => setStatus2(e.target.value)} className="table-input table-select">
                                <option value="ready">Готово к получению</option>
                                <option value="delivered">Доставлено</option>
                                <option value="waiting">Ожидание отгрузки</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="text" value={order3} onChange={(e) => setOrder3(e.target.value)} className="table-input" /></td>
                        <td><input type="date" value={orderDate3} onChange={(e) => setOrderDate3(e.target.value)} className="table-input" /></td>
                        <td><input type="text" value={supplier3} onChange={(e) => setSupplier3(e.target.value)}  className="table-input" /></td>
                        <td><input type="text" value={sum3}  onChange={(e) => setSum3(e.target.value)} className="table-input" /></td>
                        <td><input type="date" value={delDate3}  onChange={(e) => setDelDate3(e.target.value)} className="table-input" /></td>
                        <td>
                            <select defaultValue={status3} onChange={(e) => setStatus3(e.target.value)} className="table-input table-select">
                                <option value="ready">Готово к получению</option>
                                <option value="delivered">Доставлено</option>
                                <option value="waiting">Ожидание отгрузки</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default TasksFormTable;