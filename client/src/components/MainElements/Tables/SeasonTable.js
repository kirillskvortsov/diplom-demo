import React from 'react';
import { Table } from 'react-bootstrap';

function SeasonTable(props) {
    return(
        <div className="table-container season-table-container">
            <Table striped bordered hover className="table">
                <thead>
                    <tr className="table-header">
                        <th>Период</th>
                        <th>Сезонный коэффициент</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Апрель 2020</td>
                        <td>0.97</td>
                    </tr>
                    <tr>
                        <td>Март 2020</td>
                        <td>0.96</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default SeasonTable;