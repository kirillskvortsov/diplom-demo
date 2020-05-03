import React from 'react';
import { Button } from 'react-bootstrap';
import cloneDeep from 'lodash/cloneDeep';
import RushTable from '../Tables/RushTable.js';
import RushModal from '../Modals/RushModal';

class RushPage extends React.Component {
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
                    number: "0002513",
                    name: "Иванов И.И.",
                    phone: "89876543211",
                    email: "ivanov@mail.ru",
                    date1: "2020-02-14",
                    date2: "2020-02-16",
                    supplier: "Поставщик",
                    status: "Доставлено",
                    parts: [
                        {
                            id: 1,
                            art: "8K0941597B",
                            desc: "Блок ксеноновой лампы Skoda, VW, Audi",
                            col: 1,
                            supp: "ЕвроАвто",
                            price: 5773,
                            selected: false
                        }
                    ],
                    selected: false
                },
                {
                    id: 2,
                    number: "0002514",
                    name: "Петров И.И.",
                    phone: "89812343211",
                    email: "petrov@mail.ru",
                    date1: "2020-02-15",
                    date2: "2020-02-19",
                    supplier: "Поставщик",
                    status: "Не доставлено",
                    parts: [
                        {
                            id: 1,
                            art: "5Q0201801",
                            desc: "Абсорбер (фильтр угольный) Skoda, VW, Audi, Seat",
                            col: 2,
                            supp: "ТТС",
                            price: 830,
                            selected: false
                        }
                    ],
                    selected: false
                },
                {
                    id: 3,
                    number: "0002515",
                    name: "Сидоров И.И.",
                    phone: "89817893211",
                    email: "sidorov@mail.ru",
                    date1: "2020-02-15",
                    date2: "2020-02-17",
                    supplier: "Склад",
                    status: "Не доставлено",
                    parts: [
                        {
                            id: 1,
                            art: "5EU807421B",
                            desc: "Бампер задний Skoda Octavia (A7) 2013",
                            col: 1,
                            supp: "ЕвроАвто",
                            price: 13821,
                            selected: false
                        }
                    ],
                    selected: false
                },
            ],
            modalData: {
                id: 0,
                number: "",
                name: "",
                phone: "",
                email: "",
                date1: date,
                date2: date,
                supplier: "Склад",
                status: "Не доставлено",
                parts:
                    [
                        {
                            id: 1,
                            art: "",
                            desc: "",
                            col: 1,
                            supp: "ЕвроАвто",
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

    componentDidMount() {
        this.setState({
            table: localStorage.getItem('rushTable') ? JSON.parse(localStorage.getItem('rushTable')) : this.state.table
        })
    }

    componentDidUpdate() {
        localStorage.setItem('rushTable', JSON.stringify(this.state.table));
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
                item.name.toLocaleLowerCase().includes(inp.toLocaleLowerCase())
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
            if (modal.supplier !== "Склад") {
                let supplierItems = JSON.parse(localStorage.getItem('supplierTable'));
                const suppliers = JSON.parse(localStorage.getItem('supplierCatalogTable'));
                const supplierId = JSON.parse(localStorage.getItem('supplierId'));
                const newSupplierItem = cloneDeep(supplierItems[0]);
                const supplier = suppliers.filter(i => i.name === modal.parts[0].supp)
                const parts = cloneDeep(modal).parts;
                parts.map(i => delete i.supp);
                newSupplierItem.date1 = modal.date1;
                newSupplierItem.date2 = modal.date2;
                newSupplierItem.email = supplier[0].email;
                newSupplierItem.inn = supplier[0].inn;
                newSupplierItem.kpp = supplier[0].kpp;
                newSupplierItem.id = supplierId;
                newSupplierItem.number = "П" + modal.number;
                newSupplierItem.parts = parts;
                newSupplierItem.status = "Ожидает отправки";
                newSupplierItem.supplier = supplier[0].name;
                newSupplierItem.tel = supplier[0].phone;
                supplierItems = supplierItems.concat(newSupplierItem);
                localStorage.setItem('supplierId', JSON.stringify(supplierId + 1));
                localStorage.setItem('supplierTable', JSON.stringify(supplierItems));
                this.setState({
                    table: this.state.table.concat(modal),
                    id: this.state.id + 1,
                    modalShow: bool,
                });
            }
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
                name: "",
                phone: "",
                email: "",
                date1: this.state.date,
                date2: this.state.date,
                supplier: "Склад",
                status: "Не доставлено",
                parts:
                    [
                        {
                            id: 1,
                            art: "",
                            desc: "",
                            col: 1,
                            supp: "ЕвроАвто",
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
            col: 1,
            supp: "ЕвроАвто",
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
        //localStorage.clear();
        const tableData = this.handleInput();
        return (
            <main className="main main-rush">
                <h1 className="page-header">Срочные заказы</h1>
                <div className="rush-page-searchbar">
                    <Button onClick={() => this.handleNewButtonClick(true)} className="rush-btn rush-btn-new">Новый заказ</Button>
                    <Button onClick={() => this.handleEditButtonClick(true)} className="rush-btn rush-btn-edit">Редактировать</Button>
                    <Button onClick={this.handleDeleteButtonClick} className="rush-btn rush-btn-delete">Удалить</Button>
                    <input
                        className="form-control rush-input"
                        type="search"
                        name="value"
                        placeholder="Номер заказа, дата или ФИО заказчика"
                        value={this.state.value}
                        onChange={this.handleSearch}
                    />
                </div>
                <RushTable
                    data={tableData}
                    handleRowClick={this.handleRowClick}
                />
                <RushModal
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
            </main>
        );
    }
}

export default RushPage;