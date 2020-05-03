import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import DemandPrognosisTable from '../../Tables/DemandPrognosisTable';

class DemandPrognosisPage extends React.Component {
    constructor(props) {
        super(props);

        const currentDate = new Date();
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        const date = months[month] + " " + year + " года";
        const area = 1500 - JSON.parse(localStorage.getItem('area'));

        this.state = {
            date: date,
            area: area,
            table: [
                {
                    id: 1,
                    art: '8K0941597B',
                    cols: 10,
                    desc: 'Блок ксеноновой лампы Skoda, VW, Audi',
                },
                {
                    id: 2,
                    art: '5Q0201801',
                    cols: 29,
                    desc: 'Абсорбер (фильтр угольный) Skoda, VW, Audi, Seat',
                },
                {
                    id: 3,
                    art: '5Q1614724',
                    cols: 30,
                    desc: 'Трубка тормозная Skoda, VW, Audi, Seat',
                },
                {
                    id: 4,
                    art: '5EU807421B',
                    cols: 4,
                    desc: 'Бампер задний Skoda Octavia (A7) 2013>',
                },
                {
                    id: 5,
                    art: '5Q0413023FH',
                    cols: 13,
                    desc: 'Амортизатор передний Skoda, VW, Audi, Seat',
                },
            ],
        }
    }

    render() {
        return (
            <main className="main main-analytics">
                <div className="analytics-headers">
                    <h1 className="page-header">Прогноз спроса на {this.state.date}</h1>
                </div>
                <h4 className="demand-table-header">Сезонный коэффициент: {JSON.parse(localStorage.getItem('coef'))}</h4>
                <h4 className="demand-table-header">Точка заказа: {JSON.parse(localStorage.getItem('order'))[0].days} дней</h4>
                <h4 className="demand-table-header">Свободного места на складе: {this.state.area} м<sup>2</sup> ({(this.state.area / 1500 * 100).toFixed(2)}%)</h4>
                <h4 className="sub-header">Список запчастей</h4>
                <DemandPrognosisTable 
                    data={this.state.table}
                />
                <div className="analytics-footer">
                    <Link to="/AnalyticsPage">
                        <Button>Аналитика</Button>
                    </Link>
                </div>
            </main>
        );
    }
}

export default DemandPrognosisPage;