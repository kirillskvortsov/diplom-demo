import React from "react";
import { Table } from "react-bootstrap";

function SeasonTable(props) {
  return (
    <div className="table-container season-table-container">
      <Table striped bordered hover className="table">
        <thead>
          <tr className="table-header">
            <th className="width-100 vertical-align">Наименование</th>
            <th className="width-100 vertical-align">VIN-номер</th>
            <th className="width-100 vertical-align">
              Сезонный коэффициент на текущий месяц (K<sub>i</sub>)
            </th>
            <th className="width-100 vertical-align">
              Усредненный сезонный коэффициент (K<sup>m</sup>)
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row, index) => {
            const { id, art, desc, Ki, Km } = row;
            return (
              <tr key={id}>
                <td>{desc}</td>
                <td>{art}</td>
                <td>{Ki}</td>
                <td>{Km}</td>
              </tr>
            );
          })}
          <tr>
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
          </tr>
          <tr>
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
          </tr>
          <tr>
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
          </tr>
          <tr>
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
          </tr>
          <tr>
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

export default SeasonTable;
