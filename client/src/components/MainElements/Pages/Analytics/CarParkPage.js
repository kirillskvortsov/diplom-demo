import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import cloneDeep from 'lodash/cloneDeep';
import CarParkTable from '../../Tables/CarParkTable';

class CarParkPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            table: [
                {
                    id: 1,
                    name: "Skoda",
                    model: "Octavia A7 2013",
                    col: 125,
                    change: "-23",
                },
                {
                    id: 2,
                    name: "Volkswagen",
                    model: "Passat CC 2019",
                    col: 21,
                    change: "+21",
                },
            ],
            modalData: {
                id: 0,
                name: "",
                model: "",
                col: 0,
                change: "",
            },
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSearch(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleInput() {
        let copy = cloneDeep(this.state.table);
        let inp = cloneDeep(this.state.value.toString());
        copy = copy.filter((item) => {
            return (
                item.name.toLocaleLowerCase().includes(inp.toLocaleLowerCase()) ||
                item.model.toLocaleLowerCase().includes(inp.toLocaleLowerCase())
            )
        })
        return copy;
    }

    render() {
        const tableData = this.handleInput();
        return (
            <main className="main main-analytics">
                <div className="grid-container search-entire-page">
                    <div className="grid-container search-container">
                        <h1 className="page-header">Структура автопарка</h1>
                        <div className="search-inputs">
                            <input
                                className="form-control margin-top-10 search-input"
                                type="search"
                                placeholder="Марка, модель или год выпуска"
                                name="value"
                                value={this.state.value}
                                onChange={this.handleSearch}
                            />
                        </div>
                    </div>
                </div>
                <CarParkTable 
                    data={tableData}
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

export default CarParkPage;