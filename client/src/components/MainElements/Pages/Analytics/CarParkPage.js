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
                    col: 425,
                    change: "+23",
                },
                {
                    id: 2,
                    name: "Skoda",
                    model: "Karoq I 2017",
                    col: 45,
                    change: "+13",
                },
                {
                    id: 3,
                    name: "Skoda",
                    model: "Rapid I 2014",
                    col: 312,
                    change: "-25",
                },
                {
                    id: 4,
                    name: "Skoda",
                    model: "Superb III 2019",
                    col: 12,
                    change: "+4",
                },
                {
                    id: 5,
                    name: "Volkswagen",
                    model: "Polo V 2016",
                    col: 138,
                    change: "+23",
                },
                {
                    id: 6,
                    name: "Volkswagen",
                    model: "Jetta A6 2012",
                    col: 125,
                    change: "-25",
                },
                {
                    id: 8,
                    name: "Volkswagen",
                    model: "Passat CC 2019",
                    col: 21,
                    change: "+21",
                },
                {
                    id: 9,
                    name: "Volkswagen",
                    model: "Passat B7 2013",
                    col: 61,
                    change: "-1",
                },
                {
                    id: 10,
                    name: "Volkswagen",
                    model: "Passat B8 2017",
                    col: 34,
                    change: "0",
                },
                {
                    id: 11,
                    name: "Volkswagen",
                    model: "Tiguan II 2018",
                    col: 123,
                    change: "+32",
                },
                {
                    id: 12,
                    name: "Volkswagen",
                    model: "Tiguan I 2013",
                    col: 190,
                    change: "-30",
                },
                {
                    id: 13,
                    name: "Volkswagen",
                    model: "Touareg II 2016",
                    col: 38,
                    change: "+25",
                },
                {
                    id: 14,
                    name: "Volkswagen",
                    model: "Touareg III 2019",
                    col: 22,
                    change: "+15",
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