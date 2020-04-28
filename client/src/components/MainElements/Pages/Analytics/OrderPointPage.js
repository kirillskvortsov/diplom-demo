import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import cloneDeep from 'lodash/cloneDeep';
import OrderPointTable from '../../Tables/OrderPointTable';
import OrderPointModal from '../../Modals/OrderPointModal';

class OrderPointPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            table: [
                {
                    id: 1,
                    period: 2020,
                    days: 40,
                    stock: 15,
                    percent: 2,
                },
                {
                    id: 2,
                    period: 2019,
                    days: 34,
                    stock: 20,
                    percent: 4,
                },
            ],
            modalData: {
                id: 0,
                period: 0,
                days: 0,
                stock: 0,
                percent: 0,
            },
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
        this.handleCloseModalClick = this.handleCloseModalClick.bind(this);
    }

    handleChange(e) {
        const modal = cloneDeep(this.state.modalData);
        const { name, value } = e.target;
        modal[name] = parseInt(value);
        this.setState({
            modalData: modal
        });
    }

    handleSaveButtonClick(e, bool) {
        const modal = cloneDeep(this.state.modalData);
        let copy = cloneDeep(this.state.table);
        copy[0] = modal;
        this.setState({
            table: copy,
            modalShow: bool
        });

    }

    handleEditButtonClick(bool) {
        this.setState({
            modalData: this.state.table[0],
            modalShow: bool
        });
    }

    handleCloseModalClick(bool) {
        this.setState({
            modalShow: bool,
        });
    }

    render() {
        return (
            <main className="main main-analytics">
                <div className="analytics-headers">
                    <h1 className="page-header">Точка заказа</h1>
                    <h2 className="sub-header height-48 next-plan">До следующего планового заказа: 35 дней</h2>
                </div>
                <div className="order-info">
                    <h3 className="sub-header order-header">Заказ формируется каждые <span className="order-days">{this.state.table[0].days} дней</span></h3>
                </div>
                <OrderPointTable
                    data={this.state.table}
                />
                <OrderPointModal
                    show={this.state.modalShow}
                    data={this.state.modalData}
                    onHide={() => this.handleCloseModalClick(false)}
                    handleChange={this.handleChange}
                    handleSaveButtonClick={(e) => this.handleSaveButtonClick(e, false)}
                />
                <div className="analytics-footer">
                    <Button className="analytics-refresh" onClick={() => this.handleEditButtonClick(true)}>Обновить</Button>
                    <Link to="/AnalyticsPage">
                        <Button>Аналитика</Button>
                    </Link>
                </div>
            </main>
        );
    }
}

export default OrderPointPage;