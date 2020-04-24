import React from 'react';
import { Button } from 'react-bootstrap';
import RushTable from '../Tables/RushTable.js';
import RushModal from '../Modals/RushModal';

class RushPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            rushTable: [
                {
                    id: 1,
                    number: "0002513",
                    name: "Иванов И.И.",
                    phome: "89876543211",
                    email: "ivanov@mail.ru",
                    date1: "14.02.2020",
                    date2: "17.02.2020",
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
                            sum: 2498
                        }
                    ],
                    totalSum: 2498,
                    selected: false
                },
                {
                    id: 2,
                    number: "0002514",
                    name: "Петров И.И.",
                    phome: "89812343211",
                    email: "petrov@mail.ru",
                    date1: "15.02.2020",
                    date2: "18.02.2020",
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
                            sum: 1073
                        }
                    ],
                    totalSum: 1073,
                    selected: false
                },
                {
                    id: 3,
                    number: "0002515",
                    name: "Сидоров И.И.",
                    phome: "89817893211",
                    email: "sidorov@mail.ru",
                    date1: "15.02.2020",
                    date2: "18.02.2020",
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
                            sum: 1073
                        }
                    ],
                    totalSum: 1073,
                    selected: false
                },
            ],
            value: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
        this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
        this.handleNewButtonClick = this.handleNewButtonClick.bind(this);
    }

    
    handleChange(event) {
        this.setState({
            value: event.target.value
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

    handleRowClick(id) {
        let copy = this.state.rushTable.slice();
        for(let i = 0; i < copy.length; i++)
            copy[i].selected = false;
        copy[id-1].selected = true;
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
        if(this.state.rushTable.filter(i => i.selected).length > 0) {
            this.setState({
                modalShow: bool
            });
        }
    }

    handleNewButtonClick(bool) {
        this.setState({
            modalShow: bool
        });
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
                        placeholder="Номер заказа, дата или ФИО заказчика" 
                        value={this.state.value} 
                        onChange={this.handleChange}
                    />
                </div>
                <RushTable 
                    data={tableData}
                    handleRowClick={this.handleRowClick}
                />
                <RushModal 
                    show={this.state.modalShow}
                    onHide={() => this.handleNewButtonClick(false)}
                />
            </main>
        );
    }
}

export default RushPage;