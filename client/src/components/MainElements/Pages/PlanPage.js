import React from 'react';
import { Button } from 'react-bootstrap';
import cloneDeep from 'lodash/cloneDeep';
import PlanTable from '../Tables/PlanTable.js';
import PlanModal from '../Modals/PlanModal';

class PlanPage extends React.Component {
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
                    number: "00031",
                    date1: "2020-02-01",
                    date2: "2020-02-03",
                    status: "Доставлено",
                    parts: [
                        {
                            id: 1,
                            art: "8K0941597B",
                            desc: "Блок ксеноновой лампы Skoda, VW, Audi",
                            col: 4,
                            supp: "ЕвроАвто",
                            date: '2020-02-07',
                            price: 5773,
                            selected: false
                        },
                        {
                            id: 2,
                            art: "5Q0201801",
                            desc: "Абсорбер (фильтр угольный) Skoda, VW, Audi, Seat",
                            col: 6,
                            supp: "ЕвроАвто",
                            date: '2020-02-07',
                            price: 968,
                            selected: false
                        }
                    ],
                    selected: false
                },
                {
                    id: 2,
                    number: "00032",
                    date1: "2020-03-01",
                    date2: "2020-03-04",
                    status: "Не доставлено",
                    parts: [
                        {
                            id: 3,
                            art: "5Q1614724",
                            desc: "Трубка тормозная Skoda, VW, Audi, Seat",
                            col: 6,
                            supp: "ТТС",
                            date: '2020-03-06',
                            price: 1142,
                            selected: false
                        },
                        {
                            id: 4,
                            art: "5EU807421B",
                            desc: "Бампер задний Skoda Octavia (A7) 2013>",
                            col: 8,
                            supp: "ТТС",
                            date: '2020-03-06',
                            price: 11056,
                            selected: false
                        }
                    ],
                    selected: false
                },
                {
                    id: 3,
                    number: "00033",
                    date1: "2020-04-01",
                    date2: "2020-04-04",
                    status: "Не доставлено",
                    parts: [
                        {
                            id: 5,
                            art: "5Q0413023FH",
                            desc: "Амортизатор передний Skoda, VW, Audi, Seat",
                            col: 12,
                            supp: "ТТС",
                            date: '2020-04-04',
                            price: 3800,
                            selected: false
                        },
                        {
                            id: 6,
                            art: "8K0941597B",
                            desc: "Блок ксеноновой лампы Skoda, VW, Audi",
                            col: 13,
                            supp: "ТТС",
                            date: '2020-04-04',
                            price: 4233,
                            selected: false
                        },
                    ],
                    selected: false
                },
            ],
            modalData: {
                id: 0,
                number: "",
                date1: date,
                date2: date,
                status: "Не доставлено",
                parts:
                    [
                        {
                            id: 1,
                            art: "",
                            desc: "",
                            col: 1,
                            supp: "ТТС",
                            date: date,
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
            table: localStorage.getItem('planTable') ? JSON.parse(localStorage.getItem('planTable')) : this.state.table
        })
    }

    componentDidUpdate() {
        localStorage.setItem('planTable', JSON.stringify(this.state.table));
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
        copy = copy.filter(item => {
            let suppliers = "";
            let supplierArray = [];
            item.parts.map(part => supplierArray.push(part.supp));
            supplierArray = [...new Set(supplierArray)];
            suppliers = supplierArray.join(', ');
            let date = item.date1.substring(8, 10) + '.' + item.date1.substring(5, 7) + '.' + item.date1.substring(0, 4);
            return(
                item.number.toLocaleLowerCase().includes(inp.toLocaleLowerCase()) ||
                date.includes(inp) ||
                suppliers.toLocaleLowerCase().includes(inp.toLocaleLowerCase())
            )})
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
            let supplierItems = JSON.parse(localStorage.getItem('supplierTable'));
            const suppliers = JSON.parse(localStorage.getItem('supplierCatalogTable'));
            const supplierId = JSON.parse(localStorage.getItem('supplierId'));
            const newSupplierItem = cloneDeep(supplierItems[0]);
            const supplier = suppliers.filter(i => i.name === modal.parts[0].supp)
            const parts = cloneDeep(modal).parts;
            parts.map(i => delete i.supp);
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
                date2: this.state.date,
                status: "Не доставлено",
                parts:
                    [
                        {
                            id: 1,
                            art: "",
                            desc: "",
                            col: 1,
                            supp: "ТТС",
                            date: this.state.date,
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
            supp: "ТТС",
            price: 0,
            date: this.state.date,
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
        return(
            <main className="main main-rush">
                <div className="search-headers">
                    <h1 className="page-header">Плановые заказы</h1>
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
                <PlanTable
                    data={tableData}
                    handleRowClick={this.handleRowClick}
                />
                <PlanModal 
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

export default PlanPage;