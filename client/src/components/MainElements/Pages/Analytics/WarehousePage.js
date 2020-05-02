import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import WarehouseTable from '../../Tables/WarehouseTable';

class WarehousePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            area: 1500,
            areaUsed: 25,
        }
    }

    componentDidMount() {
        let newAreaUsed = 0;
        const items = JSON.parse(localStorage.getItem('searchTable'));
        items.forEach(i => {
            newAreaUsed += i.area * i.cols;
        });
        this.setState({
            areaUsed: newAreaUsed
        })
        localStorage.setItem("area", newAreaUsed);
    }

    componentDidUpdate() {
        localStorage.setItem('area', JSON.stringify(this.state.areaUsed));
    }

    render() {
        return (
            <main className="main main-analytics">
                <div className="analytics-headers">
                    <h1 className="page-header">Вместимость склада</h1>
                    <h2 className="sub-header height-48 next-plan">До следующего планового заказа: 35 дней</h2>
                </div>
                <div className="order-info">
                    <h3 className="sub-header order-header">Общая площадь склада: <span className="order-days">{this.state.area} м<sup>2</sup></span></h3>
                    <h3 className="sub-header order-header">Занятая площадь: <span className="order-days">{this.state.areaUsed} м<sup>2</sup></span></h3>
                    <h3 className="sub-header order-header">Склад заполнен на <span className="order-days">{(this.state.areaUsed / this.state.area * 100).toFixed(2)}%</span></h3>
                </div>
                <WarehouseTable />
                <div className="analytics-footer">
                    <Link to="/AnalyticsPage">
                        <Button>Аналитика</Button>
                    </Link>
                </div>
            </main>
        );
    }
}

export default WarehousePage;