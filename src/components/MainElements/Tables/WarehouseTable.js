import React from 'react';
import { Table } from 'react-bootstrap';

function WarehouseTable(props) {
    return(
        <div className="table-container demand-table-container">
            <Table striped bordered hover className="table">
                <thead>
                    <tr className="table-header">
                        <th>Период</th>
                        <th>Занятая площадь на начало периода (м<sup>2</sup>)</th>
                        <th>Занятая площадь на конец периода (м<sup>2</sup>)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Апрель 2020</td>
                        <td>1300</td>
                        <td>600</td>
                    </tr>
                    <tr>
                        <td>Март 2020</td>
                        <td>1000</td>
                        <td>560</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default WarehouseTable;