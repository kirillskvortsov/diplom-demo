import React from 'react';
import { Button } from 'react-bootstrap';
import RushTable from '../Tables/RushTable.js';
import RushModal from '../Modals/RushModal';

class RushPage extends React.Component {
    constructor(props) {
        super(props);

        const currentDate = new Date();
        const day = currentDate.getDate() > 9 ? currentDate.getDate() : "0" + currentDate.getDate();
        const month = currentDate.getMonth() + 1  > 9 ? currentDate.getMonth() + 1 : "0" + (currentDate.getMonth() + 1);
        const year = currentDate.getFullYear();
        const date = year + "-" + month + "-" + day;

        this.state = {
            date: date,
            modalShow: false,
            rushTable: [
                {
                    id: 1,
                    number: "0002513",
                    name: "Иванов И.И.",
                    phone: "89876543211",
                    email: "ivanov@mail.ru",
                    date1: "2020-02-14",
                    date2: "2020-02-17",
                    supplier: "ЕвроАвто",
                    status: "Доставлено",
                    parts: [
                        {   
                            id: 1,
                            art: "0000001",
                            desc: "запчасть_1",
                            col: 1,
                            supp: "ЕвроАвто",
                            price: 2498,
                            sum: 2498,
                            selected: false
                        }
                    ],
                    totalSum: 2498,
                    selected: false
                },
                {
                    id: 2,
                    number: "0002514",
                    name: "Петров И.И.",
                    phone: "89812343211",
                    email: "petrov@mail.ru",
                    date1: "2020-02-15",
                    date2: "2020-02-18",
                    supplier: "ТТС",
                    status: "Ожидает отправки",
                    parts: [
                        {   
                            id: 1,
                            art: "0000002",
                            desc: "запчасть_2",
                            col: 1,
                            supp: "ТТС",
                            price: 1073,
                            sum: 1073,
                            selected: false
                        }
                    ],
                    totalSum: 1073,
                    selected: false
                },
                {
                    id: 3,
                    number: "0002515",
                    name: "Сидоров И.И.",
                    phone: "89817893211",
                    email: "sidorov@mail.ru",
                    date1: "2020-02-15",
                    date2: "2020-02-18",
                    supplier: "ТТС",
                    status: "Доставлено",
                    parts: [
                        {   
                            id: 1,
                            art: "0000002",
                            desc: "запчасть_2",
                            col: 1,
                            supp: "ТТС",
                            price: 1073,
                            sum: 1073,
                            selected: false
                        }
                    ],
                    totalSum: 1073,
                    selected: false
                },
            ],
            value: '',
            modalData: {
                id: 0,
                number: "",
                name: "",
                phone: "",
                email: "",
                date1: date,
                date2: date,
                supplier: "",
                status: "Ожидает отправки",
                parts: 
                [
                    {   
                        id: 1,
                        art: "",
                        desc: "",
                        col: 0,
                        supp: "",
                        price: 0,
                        sum: 0 ,
                        selected: false
                    }
                ],
                totalSum: 0,
                selected: false,
            },
            id: 10000001,
            partsId: 10000001
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
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    handleChange(e) {
        const modalData = this.state.modalData;
        const { name, value } = e.target;
        modalData[0][name] = value;
        this.setState({ 
            modalData: modalData 
        });
    }

    handleTableChange(e) {
        const modalData = this.state.modalData;
        const { name, value } = e.target;
        modalData[0].parts[0][name] = value;
        this.setState({ 
            modalData: modalData 
        });
    }

    handleInput() {
        let copy = this.state.rushTable.slice();
        let inp = this.state.value.toString();
        copy = copy.filter((item) => 
            item.number.toLocaleLowerCase().includes(inp) || 
            item.date1.toLocaleLowerCase().includes(inp) || 
            item.name.toLocaleLowerCase().includes(inp)
        )
        return copy;
    }

    handleFormRowClick(id) {
        let copy = this.state.modalData;
        for(let i = 0; i < copy.length; i++)
            copy[0].parts[i].selected = false;
        copy[0].parts.find(i => i.id === id).selected = true;
        this.setState({
            modalData: copy
        });
    }

    handleFormDeleteButtonClick() {
        let items = this.state.modalData;
        items[0].parts = items[0].parts.filter(i => !i.selected);
        this.setState({
            modalData: items
        });
    }

    handleRowClick(id) {
        let copy = this.state.rushTable.slice();
        for(let i = 0; i < copy.length; i++)
            copy[i].selected = false;
        copy.find(i => i.id === id).selected = true;
        this.setState({
            rushTable: copy
        });
    }

    handleDeleteButtonClick() {
        let items = this.state.rushTable.filter(i => !i.selected);
        this.setState({
            rushTable: items
        });
    }

    handleEditButtonClick(bool) {
        const item = this.state.rushTable.filter(i => i.selected);
        if(item.length > 0) {
            this.setState({
                modalData: item,
                modalShow: bool
            });
        }
    }

    handleSaveButtonClick(bool) {
        const modal = this.state.modalData[0];
        const rush = this.state.rushTable;
        this.setState({
            rushTable: this.state.rushTable.concat(modal),
            id: this.state.id + 1,
            modalShow: bool,
        });
    }

    handleNewButtonClick(bool) {
        let copy = this.state.rushTable.slice();
        for(let i = 0; i < copy.length; i++)
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
                supplier: "",
                status: "Ожидает отправки",
                parts: 
                [
                    {   
                        id: 1,
                        art: "",
                        desc: "",
                        col: 0,
                        supp: "",
                        price: 0,
                        sum: 0,
                        selected: false
                    }
                ],
                totalSum: 0,
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
        let modal = this.state.modalData;
        let col = [{   
            id: this.state.partsId,
            art: "",
            desc: "",
            col: 0,
            supp: "",
            price: 0,
            sum: 0,
            selected: false 
        }];
        modal[0].parts = modal[0].parts.concat(col);
        this.setState({
            modalData: modal,
            partsId: this.state.partsId + 1
        })
    }

    render() {
        const tableData = this.handleInput();
        return(
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
                    handleSaveButtonClick={() => this.handleSaveButtonClick(false)}
                    handleAddClick={this.handleAddClick}
                    handleFormRowClick={this.handleFormRowClick}
                    handleFormDeleteButtonClick={this.handleFormDeleteButtonClick}
                />
            </main>
        );
    }
}

export default RushPage;