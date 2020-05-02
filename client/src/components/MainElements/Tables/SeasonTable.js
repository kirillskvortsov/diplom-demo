import React from 'react';
import { Table } from 'react-bootstrap';

function SeasonTable(props) {
    return (
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
                        <td>Май 2020</td>
                        <td>1.01</td>
                    </tr>
                    <tr>
                        <td>Апрель 2020</td>
                        <td>0.97</td>
                    </tr>
                    <tr>
                        <td>Март 2020</td>
                        <td>0.93</td>
                    </tr>
                    <tr>
                        <td>Февраль 2020</td>
                        <td>0.89</td>
                    </tr>
                    <tr>
                        <td>Январь 2020</td>
                        <td>1.09</td>
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