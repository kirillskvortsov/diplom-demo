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
                    selected: false,
                    time: 2,
                    parts: [
                        {
                            art: '8K0941597B',
                            desc: 'Блок ксеноновой лампы Skoda, VW, Audi',
                            price: Math.floor(3849 * 1.5),
                            selected: false,
                        },
                        {
                            art: '5Q0201801',
                            desc: 'Абсорбер (фильтр угольный) Skoda, VW, Audi, Seat',
                            price: Math.floor(692 * 1.4),
                            selected: false,
                        },
                        {
                            art: '5Q1614724',
                            desc: 'Трубка тормозная Skoda, VW, Audi, Seat',
                            price: Math.floor(879 * 1.5),
                            selected: false,
                        },
                        {
                            art: '5EU807421B',
                            desc: 'Бампер задний Skoda Octavia (A7) 2013>',
                            price: Math.floor(9214 * 1.5),
                            selected: false,
                        },
                        {
                            art: '5Q0413023FH',
                            desc: 'Амортизатор передний Skoda, VW, Audi, Seat',
                            price: Math.floor(3167 * 1.3),
                            selected: false,
                        },
                    ]
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
                    selected: false,
                    time: 4,
                    parts: [
                        {
                            art: '8K0941597B',
                            desc: 'Блок ксеноновой лампы Skoda, VW, Audi',
                            price: Math.floor(3849 * 1.1),
                            selected: false,
                        },
                        {
                            art: '5Q0201801',
                            desc: 'Абсорбер (фильтр угольный) Skoda, VW, Audi, Seat',
                            price: Math.floor(692 * 1.2),
                            selected: false,
                        },
                        {
                            art: '5Q1614724',
                            desc: 'Трубка тормозная Skoda, VW, Audi, Seat',
                            price: Math.floor(879 * 1.3),
                            selected: false,
                        },
                        {
                            art: '5EU807421B',
                            desc: 'Бампер задний Skoda Octavia (A7) 2013>',
                            price: Math.floor(9214 * 1.2),
                            selected: false,
                        },
                        {
                            art: '5Q0413023FH',
                            desc: 'Амортизатор передний Skoda, VW, Audi, Seat',
                            price: Math.floor(3167 * 1.2),
                            selected: false,
                        },
                    ]
                },
                {
                    id: 3,
                    name: "VAG",
                    phone: '8123451928',
                    email: 'vag@mail.ru',
                    address: 'РТ, Казань, Ямашева 88',
                    inn: '6806194578',
                    kpp: '446945036',
                    bank: '5404 3671 1493 4155',
                    selected: false,
                    time: 3,
                    parts: [
                        {
                            art: '8K0941597B',
                            desc: 'Блок ксеноновой лампы Skoda, VW, Audi',
                            price: Math.floor(3849 * 1.6),
                            selected: false,
                        },
                        {
                            art: '5Q0201801',
                            desc: 'Абсорбер (фильтр угольный) Skoda, VW, Audi, Seat',
                            price: Math.floor(692 * 1.1),
                            selected: false,
                        },
                        {
                            art: '5Q1614724',
                            desc: 'Трубка тормозная Skoda, VW, Audi, Seat',
                            price: Math.floor(879 * 1.5),
                            selected: false,
                        },
                        {
                            art: '5EU807421B',
                            desc: 'Бампер задний Skoda Octavia (A7) 2013>',
                            price: Math.floor(9214 * 1.2),
                            selected: false,
                        },
                        {
                            art: '5Q0413023FH',
                            desc: 'Амортизатор передний Skoda, VW, Audi, Seat',
                            price: Math.floor(3167 * 1.5),
                            selected: false,
                        },
                    ]
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
                time: 0,
                parts: [
                    {
                        art: '',
                        desc: '',
                        price: 0,
                        selected: false,
                    }
                ]
            },
            value: '',
            id: 10000001,
            partsId: 10000001,
            new: true
        }

        this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleTableChange = this.handleTableChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
        this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
        this.handleNewButtonClick = this.handleNewButtonClick.bind(this);
        this.handleCloseModalClick = this.handleCloseModalClick.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleFormDeleteButtonClick = this.handleFormDeleteButtonClick.bind(this);
        this.handleFormRowClick = this.handleFormRowClick.bind(this);
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

    handleFormDeleteButtonClick() {
        let items = cloneDeep(this.state.modalData);
        items[0].parts = items[0].parts.filter(i => !i.selected);
        this.setState({
            modalData: items
        });
    }

    handleTableChange(e) {
        const modalData = cloneDeep(this.state.modalData);
        const { name, value } = e.target;
        modalData[0].parts.find(i => i.selected === true)[name] = value;
        this.setState({
            modalData: modalData
        });
    }

    handleFormRowClick(art) {
        let copy = cloneDeep(this.state.modalData);
        for (let i = 0; i < copy[0].parts.length; i++)
            copy[0].parts[i].selected = false;
        copy[0].parts.find(i => i.art === art).selected = true;
        this.setState({
            modalData: copy
        });
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
                selected: false,
                time: 0,
                parts: [
                    {
                        art: '',
                        desc: '',
                        price: 0,
                        selected: false,
                    }
                ]
            }],
            modalShow: bool,
        });
    }

    handleCloseModalClick(bool) {
        this.setState({
            modalShow: bool,
        });
    }

    handleAddClick() {
        let modal = cloneDeep(this.state.modalData);
        let row = [{
            art: '',
            desc: '',
            price: 0,
            selected: false,
        }];
        modal[0].parts = modal[0].parts.concat(row);
        this.setState({
            modalData: modal,
            partsId: this.state.partsId + 1
        })
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
                    date={this.state.date}
                    onHide={() => this.handleCloseModalClick(false)}
                    handleChange={this.handleChange}
                    handleTableChange={this.handleTableChange}
                    handleSaveButtonClick={(e) => this.handleSaveButtonClick(e, false)}
                    handleAddClick={this.handleAddClick}
                    handleFormRowClick={this.handleFormRowClick}
                    handleFormDeleteButtonClick={this.handleFormDeleteButtonClick}
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