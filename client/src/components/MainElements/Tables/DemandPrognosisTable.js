import React from 'react';
import { Table } from 'react-bootstrap';

function DemandPrognosisTable(props) {
    return (
        <div className="table-container demand-table-container">
            <Table striped bordered hover className="table">
                <thead>
                    <tr className="table-header">
                        <th className="width-100 vertical-align">Артикул</th>
                        <th className="width-300 vertical-align">Описание</th>
                        <th className="width-100 vertical-align">Количество</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((i, key) => {
                        return (
                            <tr key={key}>
                                <td>{i.art}</td>
                                <td>{i.desc}</td>
                                <td>{i.cols}</td>
                            </tr>
                        )})}
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

export default DemandPrognosisTable;