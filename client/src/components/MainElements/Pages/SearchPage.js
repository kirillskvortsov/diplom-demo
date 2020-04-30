import React from 'react';
import { Button } from 'react-bootstrap';
import cloneDeep from 'lodash/cloneDeep';
import SearchTable from '../Tables/SearchTable';
import SearchModal from '../Modals/SearchModal';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            table: [
                {
                    id: 1,
                    art: '0003758',
                    cols: 23,
                    vin: '5Q0129621B',
                    colr: 0,
                    supp: 'VAG',
                    price: 692,
                    desc: 'Воздуховод SKODA OCTAVIA (A7) (2013>)',
                    selected: false
                },
                {
                    id: 2,
                    art: '0003728',
                    cols: 12,
                    vin: '5E0998226',
                    colr: 5,
                    supp: 'VAG',
                    price: 418,
                    desc: 'Кронштейн фар правый Octavia (A7) 2013>',
                    selected: false
                },
            ],
            modalData: {
                id: 0,
                art: '',
                cols: 0,
                vin: '',
                colr: 0,
                supp: '',
                price: 0,
                desc: '',
                selected: false,
            },
            value: '',
            id: 10000001,
            new: true
        }

        this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
        this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
        this.handleNewButtonClick = this.handleNewButtonClick.bind(this);
        this.handleCloseModalClick = this.handleCloseModalClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            table: localStorage.getItem('searchTable') ? JSON.parse(localStorage.getItem('searchTable')) : this.state.table
        })
    }

    componentDidUpdate() {
        localStorage.setItem('searchTable', JSON.stringify(this.state.table));
    }

    handleSearch(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleChange(e) {
        const modal = cloneDeep(this.state.modalData);
        const { name, value } = e.target;
        modal[0][name] = value;
        this.setState({
            modalData: modal
        });
    }

    handleInput() {
        let copy = cloneDeep(this.state.table);
        let inp = cloneDeep(this.state.value.toString());
        copy = copy.filter((item) =>
            item.art.toLocaleLowerCase().includes(inp.toLocaleLowerCase()) ||
            item.vin.toLocaleLowerCase().includes(inp.toLocaleLowerCase()) ||
            item.desc.toLocaleLowerCase().includes(inp.toLocaleLowerCase())
        )
        return copy;
    }

    handleRowClick(id) {
        let copy = cloneDeep(this.state.table);
        for (let i = 0; i < copy.length; i++)
            copy[i].selected = false;
        copy.find(i => i.id === id).selected = true;
        this.setState({
            table: copy
        });
    }

    handleDeleteButtonClick() {
        let items = cloneDeep(this.state.table.filter(i => !i.selected));
        this.setState({
            table: items
        });
    }

    handleEditButtonClick(bool) {
        const item = cloneDeep(this.state.table.filter(i => i.selected));
        if (item.length > 0) {
            this.setState({
                new: false,
                modalData: item,
                modalShow: bool
            });
        }
    }

    handleSaveButtonClick(e, bool) {
        e.preventDefault();
        const modal = cloneDeep(this.state.modalData[0]);
        if (this.state.new) {
            this.setState({
                table: this.state.table.concat(modal),
                id: this.state.id + 1,
                modalShow: bool,
            });
        } else {
            let copy = cloneDeep(this.state.table);
            for (let i = 0; i < copy.length; i++) {
                if (copy[i].id === modal.id) {
                    copy[i] = modal;
                    break;
                }
            }
            this.setState({
                table: copy,
                modalShow: bool,
                new: true,
            });
        }
    }

    handleNewButtonClick(bool) {
        let copy = cloneDeep(this.state.table);
        for (let i = 0; i < copy.length; i++)
            copy[i].selected = false;
        this.setState({
            modalData: [{
                id: this.state.id,
                art: '',
                cols: 0,
                vin: '',
                colr: 0,
                supp: '',
                price: 0,
                desc: '',
                selected: false
            }],
            modalShow: bool,
        });
    }

    handleCloseModalClick(bool) {
        this.setState({
            modalShow: bool,
        });
    }

    render() {
        localStorage.clear();
        const tableData = this.handleInput();
        return (
            <main className="main main-rush">
                <div className="search-headers">
                    <h1 className="page-header">Поиск запчастей</h1>
                </div>
                <div className="rush-page-searchbar">
                    <Button onClick={() => this.handleNewButtonClick(true)} className="rush-btn rush-btn-new">Новая запчасть</Button>
                    <Button onClick={() => this.handleEditButtonClick(true)} className="rush-btn rush-btn-edit">Редактировать</Button>
                    <Button onClick={this.handleDeleteButtonClick} className="rush-btn rush-btn-delete">Удалить</Button>
                    <input
                        className="form-control rush-input"
                        type="search"
                        name="value"
                        placeholder="Артикул, VIN или описание"
                        value={this.state.value}
                        onChange={this.handleSearch}
                    />
                </div>
                <SearchTable 
                    data={tableData}
                    handleRowClick={this.handleRowClick}
                />
                <SearchModal
                    data={this.state.modalData}
                    show={this.state.modalShow}
                    onHide={() => this.handleCloseModalClick(false)}
                    handleChange={this.handleChange}
                    handleSaveButtonClick={(e) => this.handleSaveButtonClick(e, false)}
                />
                <div className="supplier-footer">
                </div>
            </main>
        );
    }
}

export default SearchPage;