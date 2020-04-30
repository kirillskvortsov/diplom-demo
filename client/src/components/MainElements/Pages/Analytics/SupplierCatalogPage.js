import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import cloneDeep from 'lodash/cloneDeep';
import SupplierCatalogTable from '../../Tables/SupplierCatalogTable';
import SupplierCatalogModal from '../../Modals/SupplierCatalogModal';

class SupplierCatalogPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            table: [
                {
                    id: 1,
                    name: "ЕвроАвто",
                    phone: '89876787654',
                    email: 'evroavto@mail.ru',
                    address: 'РТ, Казань, Яруллина 6',
                    inn: '8138281655',
                    kpp: '902545830',
                    bank: '5404 3695 5685 0873',
                    selected: false
                },
                {
                    id: 2,
                    name: "ТТС",
                    phone: '81922831928',
                    email: 'tts@mail.ru',
                    address: 'РТ, Казань, Вахитова 25',
                    inn: '4914580055',
                    kpp: '342901918',
                    bank: '5404 3641 7640 6131',
                    selected: false
                },
            ],
            modalData: {
                id: 0,
                name: "",
                phone: '',
                email: '',
                address: '',
                inn: '',
                kpp: '',
                bank: '',
                selected: false,
            },
            value: '',
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
            table: localStorage.getItem('supplierCatalogTable') ? JSON.parse(localStorage.getItem('supplierCatalogTable')) : this.state.table
        })
    }

    componentDidUpdate() {
        localStorage.setItem('supplierCatalogTable', JSON.stringify(this.state.table));
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
            item.name.toLocaleLowerCase().includes(inp.toLocaleLowerCase()) ||
            item.inn.toLocaleLowerCase().includes(inp.toLocaleLowerCase()) ||
            item.phone.includes(inp)
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
                name: '',
                phone: '',
                email: '',
                address: '',
                inn: '',
                kpp: '',
                bank: '',
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
        //localStorage.clear();
        const tableData = this.handleInput();
        return (
            <main className="main main-rush">
                <div className="search-headers">
                    <h1 className="page-header">Поставщики</h1>
                </div>
                <div className="rush-page-searchbar">
                    <Button onClick={() => this.handleNewButtonClick(true)} className="rush-btn rush-btn-new">Новый поставщик</Button>
                    <Button onClick={() => this.handleEditButtonClick(true)} className="rush-btn rush-btn-edit">Редактировать</Button>
                    <Button onClick={this.handleDeleteButtonClick} className="rush-btn rush-btn-delete">Удалить</Button>
                    <input
                        className="form-control rush-input"
                        type="search"
                        name="value"
                        placeholder="Название, ИНН или телефон"
                        value={this.state.value}
                        onChange={this.handleSearch}
                    />
                </div>
                <SupplierCatalogTable
                    data={tableData}
                    handleRowClick={this.handleRowClick}
                />
                <SupplierCatalogModal
                    data={this.state.modalData}
                    show={this.state.modalShow}
                    onHide={() => this.handleCloseModalClick(false)}
                    handleChange={this.handleChange}
                    handleSaveButtonClick={(e) => this.handleSaveButtonClick(e, false)}
                />
                <div className="supplier-footer">
                    <Link to="/AnalyticsPage">
                        <Button>Аналитика</Button>
                    </Link>
                </div>
            </main>
        );
    }
}

export default SupplierCatalogPage;