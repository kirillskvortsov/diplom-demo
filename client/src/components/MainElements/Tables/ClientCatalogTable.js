import React from 'react';
import { Table } from 'react-bootstrap';

function ClientCatalogTable(props) {
    return (
        <div className="table-container supplier-table-container">
            <Table striped bordered hover className="table">
                <thead>
                    <tr className="table-header">
                        <th>ФИО</th>
                        <th>Телефон</th>
                        <th>E-mail</th>
                        <th>Адрес</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((row, index) => {
                        const { id, name, phone, email, address, selected } = row;
                        return (
                            <tr className={selected ? "table-row-selected" : "table-row-non-selected"} key={id} onClick={props.handleRowClick.bind(this, id)}>
                                <td>{name}</td>
                                <td>{phone}</td>
                                <td>{email}</td>
                                <td>{address}</td>
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

export default ClientCatalogTable;