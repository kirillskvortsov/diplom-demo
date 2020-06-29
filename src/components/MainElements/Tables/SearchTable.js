import React from 'react';
import { Table } from 'react-bootstrap';

function SearchTable(props) {
    return(
        <div className="table-container search-table-container">
            <Table striped bordered hover className="table">
                <thead>
                    <tr className="table-header">
                        <th className="width-100 vertical-align">Артикул</th>
                        <th className="width-100 vertical-align">Производитель</th>
                        <th className="width-100 vertical-align">Количество на складе</th>
                        <th className="width-100 vertical-align">Количество в резерве</th>
                        <th className="width-100 vertical-align">Стоимость, руб.</th>
                        <th className="width-300 vertical-align">Описание</th>
                    </tr>
                </thead>
                <tbody>
                {props.data.map((row, index) => {
                        const { id, art, supp, cols, colr, price, desc, selected } = row;
                        return (
                            <tr className={selected ? "table-row-selected" : "table-row-non-selected"} key={id} onClick={props.handleRowClick.bind(this, id)}>
                                <td>{art}</td>
                                <td>{supp}</td>
                                <td>{cols}</td>
                                <td>{colr}</td>
                                <td>{price}</td>
                                <td>{desc}</td>
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

export default SearchTable;