import React from 'react';
import { Table } from 'react-bootstrap';

function SearchTable(props) {
    return(
        <div className="table-container search-table-container">
            <Table striped bordered hover className="table">
                <thead>
                    <tr>
                        <th>Артикул</th>
                        <th>VIN-номер</th>
                        <th>Количество на складе</th>
                        <th>Количество в резерве</th>
                        <th>Срок доставки</th>
                        <th>Стоимость</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0003758</td>
                        <td>5Q0129621B</td>
                        <td>23</td>
                        <td>0<span onClick={props.onClick} className="reserve-btn">Зарезервировать</span></td>
                        <td>0 дней</td>
                        <td>692 руб.</td>
                        <td>Воздухохавод SKODA OCTAVIA (A7) (2013>)</td>
                    </tr>
                    <tr>
                        <td>0103728</td>
                        <td>5E0998226</td>
                        <td>0</td>
                        <td>0<span onClick={props.onClick} className="reserve-btn">Зарезервировать</span></td>
                        <td>3 дня</td>
                        <td>418 руб.</td>
                        <td>Кронштейн фар правый Octavia (A7) 2013></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
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
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
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
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
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
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
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