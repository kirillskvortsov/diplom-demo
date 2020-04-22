import React from 'react';
import { Table } from 'react-bootstrap';

function DemandPrognosisTable(props) {
    return(
        <div className="table-container demand-table-container">
            <Table striped bordered hover className="table">
                <thead>
                    <tr className="table-header">
                        <th>Артикул</th>
                        <th>Описание</th>
                        <th>Количество</th>
                        <th>Необходимо докупить</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1987263</td>
                        <td>Фара левая SKODA OCTAVIA (2013>)</td>
                        <td>25</td>
                        <td>23</td>
                    </tr>
                    <tr>
                        <td>1652312</td>
                        <td>Фара правая SKODA OCTAVIA (2013>)</td>
                        <td>24</td>
                        <td>24</td>
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

export default DemandPrognosisTable;