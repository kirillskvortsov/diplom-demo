import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import SeasonTable from '../../Tables/SeasonTable';

class SeasonPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coef: 1.01
        }
    }

    componentDidMount() {
        this.setState({
            coef: localStorage.getItem('coef') ? JSON.parse(localStorage.getItem('coef')) : this.state.coef
        })
    }

    componentDidUpdate() {
        localStorage.setItem('coef', JSON.stringify(this.state.coef));
    }

    render() {
        return (
            <main className="main main-analytics">
                <div className="analytics-headers">
                    <h1 className="page-header">Сезонный коэффициент</h1>
                    <h2 className="sub-header height-48 next-plan">До следующего планового заказа: 35 дней</h2>
                </div>
                <div className="order-info">
                    <h3 className="sub-header order-header">Сезонный коэффициент на текущий период: <span className="order-days">{this.state.coef}</span></h3>
                </div>
                <SeasonTable />
                <div className="analytics-footer">
                    <Link to="/AnalyticsPage">
                        <Button>Аналитика</Button>
                    </Link>
                </div>
            </main>
        );
    }
}

export default SeasonPage;