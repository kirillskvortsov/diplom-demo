import React from "react";
import { Table } from "react-bootstrap";

function OrderPointTable(props) {
  return (
    <div className="table-container supplier-table-container">
      <Table striped bordered hover className="table">
        <thead>
          <tr className="table-header">
            <th className="width-300 vertical-align">Наименование</th>
            <th className="width-100 vertical-align">VIN-номер</th>
            <th className="width-100 vertical-align">Страховой запас</th>
            <th className="width-100 vertical-align">Среднесуточный расход</th>
            <th className="width-100 vertical-align">Категория товара</th>
            <th className="width-100 vertical-align">
              Коэфициент обслуживания
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row, index) => {
            const { id, art, desc, sStock, cons, cat, coef } = row;
            return (
              <tr key={id}>
                <td>{desc}</td>
                <td>{art}</td>
                <td>{sStock}</td>
                <td>{cons}</td>
                <td>{cat}</td>
                <td>{coef}%</td>
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
          </tr>
          <tr>
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
          </tr>
          <tr>
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
          </tr>
          <tr>
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
          </tr>
          <tr>
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
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default OrderPointTable;
