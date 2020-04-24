import React from 'react';
import SearchTable from '../Tables/SearchTable';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTable: [
                {
                    id: 1,
                    art: "0003758",
                    vin: "5Q0129621B",
                    stock: 23,
                    reserve: 0,
                    time: 0,
                    cost: "692 руб.",
                    desc: "Воздуховод SKODA OCTAVIA (A7) (2013>)"
                },
                {
                    id: 2,
                    art: "0103728",
                    vin: "5E0998226",
                    stock: 0,
                    reserve: 0,
                    time: 0,
                    cost: "418 руб.",
                    desc: "Кронштейн фар правый SKODA OCTAVIA (A7) (2013>)"
                },
            ],
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleInput() {
        let copy = this.state.searchTable.slice();
        let inp = this.state.value.toString();
        copy = copy.filter((item) => item.desc.toLocaleLowerCase().includes(inp) || item.vin.toLocaleLowerCase().includes(inp) || item.art.toLocaleLowerCase().includes(inp))
        return copy;
    }
    
    render() {
        const tableData = this.handleInput();
        return(
            <main className="main main-search">
                <div className="grid-container search-entire-page">
                    <div className="grid-container search-container">
                        <h1 className="page-header">Поиск запчастей</h1>
                        <div className="search-inputs">
                            <input 
                                className="form-control search-input" 
                                type="search" 
                                placeholder="Описание, артикул или VIN-номер" 
                                value={this.state.value} 
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </div>
                <SearchTable data={tableData}/>
            </main>
        );
    }
}

export default SearchPage;