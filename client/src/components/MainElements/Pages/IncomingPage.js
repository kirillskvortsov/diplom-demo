import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import cloneDeep from 'lodash/cloneDeep';
import IncomingTable from '../Tables/IncomingTable.js';
import IncomingModal from '../Modals/IncomingModal';

class IncomingPage extends React.Component {
    constructor(props) {
        super(props);

        const currentDate = new Date();
        const day = currentDate.getDate() > 9 ? currentDate.getDate() : "0" + currentDate.getDate();
        const month = currentDate.getMonth() + 1 > 9 ? currentDate.getMonth() + 1 : "0" + (currentDate.getMonth() + 1);
        const year = currentDate.getFullYear();
        const date = year + "-" + month + "-" + day;

        this.state = {
            date: date,
            modalShow: false,
            table: [
                {
                    id: 1,
                    number: "Н0231",
                    date1: "2020-02-01",
                    supplier: 'ЕвроАвто',
                    status: "Принято, проверено",
                    parts: [
                        {
                            id: 1,
                            art: "0000001",
                            desc: "запчасть_1",
                            col: 1,
                            price: 2498,
                            selected: false
                        },
                        {
                            id: 2,
                            art: "0000002",
                            desc: "запчасть_2",
                            col: 1,
                            price: 1872,
                            selected: false
                        }
                    ],
                    selected: false
                },
                {
                    id: 2,
                    number: "Н0232",
                    date1: "2020-02-01",
                    supplier: 'VAG',
                    status: "Принято, ожидает проверки",
                    parts: [
                        {
                            id: 3,
                            art: "0000003",
                            desc: "запчасть_3",
                            col: 1,
                            price: 1891,
                            selected: false
                        },
                        {
                            id: 4,
                            art: "0000001",
                            desc: "запчасть_1",
                            col: 1,
                            price: 986,
                            selected: false
                        }
                    ],
                    selected: false
                },
                {
                    id: 3,
                    number: "Н0233",
                    date1: "2020-03-01",
                    supplier: 'ТТС',
                    status: "Не принято",
                    parts: [
                        {
                            id: 5,
                            art: "0000005",
                            desc: "запчасть_5",
                            col: 1,
                            price: 1073,
                            selected: false
                        }
                    ],
                    selected: false
                },
            ],
            modalData: {
                id: 0,
                number: "",
                date1: date,
                supplier: '',
                status: "Не принято",
                parts:
                    [
                        {
                            id: 1,
                            art: "",
                            desc: "",
                            col: 0,
                            price: 0,
                            selected: false
                        }
                    ],
                selected: false,
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

    handleTableChange(e) {
        const modalData = cloneDeep(this.state.modalData);
        const { name, value } = e.target;
        modalData[0].parts.find(i => i.selected === true)[name] = value;
        this.setState({
            modalData: modalData
        });
    }

    handleInput() {
        let copy = cloneDeep(this.state.table);
        let inp = cloneDeep(this.state.value.toString());
        copy = copy.filter((item) => {
            let date = item.date1.substring(8, 10) + '.' + item.date1.substring(5, 7) + '.' + item.date1.substring(0, 4);
            return (
                item.number.toLocaleLowerCase().includes(inp) ||
                date.includes(inp) ||
                item.supplier.toLocaleLowerCase().includes(inp.toLocaleLowerCase())
            )
        })
        return copy;
    }

    handleFormRowClick(id) {
        let copy = cloneDeep(this.state.modalData);
        for (let i = 0; i < copy[0].parts.length; i++)
            copy[0].parts[i].selected = false;
        copy[0].parts.find(i => i.id === id).selected = true;
        this.setState({
            modalData: copy
        });
    }

    handleFormDeleteButtonClick() {
        let items = cloneDeep(this.state.modalData);
        items[0].parts = items[0].parts.filter(i => !i.selected);
        this.setState({
            modalData: items
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
                number: "",
                date1: this.state.date,
                supplier: '',
                status: "Не принято",
                parts:
                    [
                        {
                            id: 1,
                            art: "",
                            desc: "",
                            col: 0,
                            price: 0,
                            selected: false
                        }
                    ],
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

    handleAddClick() {
        let modal = cloneDeep(this.state.modalData);
        let row = [{
            id: this.state.partsId,
            art: "",
            desc: "",
            col: 0,
            price: 0,
            selected: false
        }];
        modal[0].parts = modal[0].parts.concat(row);
        this.setState({
            modalData: modal,
            partsId: this.state.partsId + 1
        })
    }

    render() {
        const tableData = this.handleInput();
        return (
            <main className="main main-rush">
                <div className="search-headers">
                    <h1 className="page-header">Приходные накладные</h1>
                    <h2 className="sub-header height-48 next-plan">До следующего планового заказа: 35 дней</h2>
                </div>
                <div className="rush-page-searchbar">
                    <Button onClick={() => this.handleNewButtonClick(true)} className="rush-btn rush-btn-new">Новый заказ</Button>
                    <Button onClick={() => this.handleEditButtonClick(true)} className="rush-btn rush-btn-edit">Редактировать</Button>
                    <Button onClick={this.handleDeleteButtonClick} className="rush-btn rush-btn-delete">Удалить</Button>
                    <input
                        className="form-control rush-input"
                        type="search"
                        name="value"
                        placeholder="Номер заказа, дата или поставщик"
                        value={this.state.value}
                        onChange={this.handleSearch}
                    />
                </div>
                <IncomingTable
                    data={tableData}
                    handleRowClick={this.handleRowClick}
                />
                <IncomingModal
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
                    <Link to="/SupplierPage">
                        <Button>Заказы поставщику</Button>
                    </Link>
                </div>
            </main>
        );
    }
}

export default IncomingPage;