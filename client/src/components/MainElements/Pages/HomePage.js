import React from 'react';
import { Link } from "react-router-dom";
import info from '../../info/navElementsInfo';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rushTable: [
                {
                    id: 1,
                    number: "0002513",
                    name: "Иванов И.И.",
                    phone: "89876543211",
                    email: "ivanov@mail.ru",
                    date1: "2020-02-14",
                    date2: "2020-02-17",
                    supplier: "Поставщик",
                    status: "Доставлено",
                    parts: [
                        {
                            id: 1,
                            art: "8K0941597B",
                            desc: "Блок ксеноновой лампы Skoda, VW, Audi",
                            col: 1,
                            supp: "ЕвроАвто",
                            price: 3849,
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
                    date2: "2020-02-18",
                    supplier: "Поставщик",
                    status: "Не доставлено",
                    parts: [
                        {
                            id: 1,
                            art: "5Q0201801",
                            desc: "Абсорбер (фильтр угольный) Skoda, VW, Audi, Seat",
                            col: 2,
                            supp: "ТТС",
                            price: 692,
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
                    date2: "2020-02-18",
                    supplier: "Склад",
                    status: "Не доставлено",
                    parts: [
                        {
                            id: 1,
                            art: "5EU807421B",
                            desc: "Бампер задний Skoda Octavia (A7) 2013",
                            col: 1,
                            supp: "ЕвроАвто",
                            price: 9214,
                            selected: false
                        }
                    ],
                }
            ],
            planTable: [
                {
                    id: 1,
                    number: "00031",
                    date1: "2020-02-01",
                    date2: "2020-02-07",
                    status: "Доставлено",
                    parts: [
                        {
                            id: 1,
                            art: "8K0941597B",
                            desc: "Блок ксеноновой лампы Skoda, VW, Audi",
                            col: 4,
                            supp: "ЕвроАвто",
                            date: '2020-02-07',
                            price: 3849,
                            selected: false
                        },
                        {
                            id: 2,
                            art: "5Q0201801",
                            desc: "Абсорбер (фильтр угольный) Skoda, VW, Audi, Seat",
                            col: 6,
                            supp: "ЕвроАвто",
                            date: '2020-02-07',
                            price: 692,
                            selected: false
                        }
                    ],
                    selected: false
                },
                {
                    id: 2,
                    number: "00032",
                    date1: "2020-03-01",
                    date2: "2020-03-06",
                    status: "Не доставлено",
                    parts: [
                        {
                            id: 3,
                            art: "5Q1614724",
                            desc: "Трубка тормозная Skoda, VW, Audi, Seat",
                            col: 6,
                            supp: "ТТС",
                            date: '2020-03-06',
                            price: 879,
                            selected: false
                        },
                        {
                            id: 4,
                            art: "5EU807421B",
                            desc: "Бампер задний Skoda Octavia (A7) 2013>",
                            col: 8,
                            supp: "ТТС",
                            date: '2020-03-06',
                            price: 9214,
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
                            price: 3167,
                            selected: false
                        },
                        {
                            id: 6,
                            art: "8K0941597B",
                            desc: "Блок ксеноновой лампы Skoda, VW, Audi",
                            col: 13,
                            supp: "ТТС",
                            date: '2020-04-04',
                            price: 3849,
                            selected: false
                        },
                    ],
                    selected: false
                },
            ],
            searchTable: [
                {
                    id: 1,
                    art: '8K0941597B',
                    cols: 5,
                    colr: 1,
                    supp: 'VAG',
                    price: 3849,
                    desc: 'Блок ксеноновой лампы Skoda, VW, Audi',
                    selected: false
                },
                {
                    id: 2,
                    art: '5Q0201801',
                    cols: 12,
                    colr: 5,
                    supp: 'VAG',
                    price: 692,
                    desc: 'Абсорбер (фильтр угольный) Skoda, VW, Audi, Seat',
                    selected: false
                },
                {
                    id: 3,
                    art: '5Q1614724',
                    cols: 5,
                    colr: 0,
                    supp: 'VAG',
                    price: 879,
                    desc: 'Трубка тормозная Skoda, VW, Audi, Seat',
                    selected: false
                },
                {
                    id: 4,
                    art: '5EU807421B',
                    cols: 1,
                    colr: 0,
                    supp: 'VAG',
                    price: 9214,
                    desc: 'Бампер задний Skoda Octavia (A7) 2013>',
                    selected: false
                },
                {
                    id: 5,
                    art: '5Q0413023FH',
                    cols: 2,
                    colr: 0,
                    supp: 'VAG',
                    price: 3167,
                    desc: 'Амортизатор передний Skoda, VW, Audi, Seat',
                    selected: false
                },
            ],
            incomingTable: [
                {
                    id: 1,
                    number: "Н000341",
                    date1: "2020-02-14",
                    supplier: 'ТТС',
                    status: "Принято",
                    parts: [
                        {
                            id: 1,
                            art: "8K0941597B",
                            desc: "Блок ксеноновой лампы Skoda, VW, Audi",
                            col: 1,
                            price: 3849,
                            selected: false
                        },
                    ],
                    selected: false
                },
                {
                    id: 2,
                    number: "Н000342",
                    date1: "2020-02-15",
                    supplier: 'ТТС',
                    status: "Принято",
                    parts: [
                        {
                            id: 3,
                            art: "5Q0201801",
                            desc: "Абсорбер (фильтр угольный) Skoda, VW, Audi, Seat",
                            col: 2,
                            price: 692,
                            selected: false
                        }
                    ],
                    selected: false
                },
                {
                    id: 3,
                    number: "Н000343",
                    date1: "2020-03-01",
                    supplier: 'ТТС',
                    status: "Не принято",
                    parts: [
                        {
                            id: 5,
                            art: "5Q1614724",
                            desc: "Трубка тормозная Skoda, VW, Audi, Seat",
                            col: 6,
                            price: 879,
                            selected: false
                        },
                        {
                            id: 6,
                            art: "5EU807421B",
                            desc: "Бампер задний Skoda Octavia (A7) 2013>",
                            col: 8,
                            price: 9214,
                            selected: false
                        }
                    ],
                    selected: false
                },
                {
                    id: 4,
                    number: "Н000344",
                    date1: "2020-02-01",
                    supplier: 'ЕвроАвто',
                    status: "Не принято",
                    parts: [
                        {
                            id: 7,
                            art: "8K0941597B",
                            desc: "Блок ксеноновой лампы Skoda, VW, Audi",
                            col: 4,
                            price: 3849,
                            selected: false
                        },
                        {
                            id: 8,
                            art: "5Q0201801",
                            desc: "Абсорбер (фильтр угольный) Skoda, VW, Audi, Seat",
                            col: 6,
                            price: 692,
                            selected: false
                        }
                    ],
                    selected: false
                },
                {
                    id: 5,
                    number: "Н000345",
                    date1: "2020-04-01",
                    supplier: 'ТТС',
                    status: "Не принято",
                    parts: [
                        {
                            id: 8,
                            art: "5Q0413023FH",
                            desc: "Амортизатор передний Skoda, VW, Audi, Seat",
                            col: 12,
                            price: 3167,
                            selected: false
                        },
                        {
                            id: 9,
                            art: "8K0941597B",
                            desc: "Блок ксеноновой лампы Skoda, VW, Audi",
                            col: 13,
                            price: 3849,
                            selected: false
                        }
                    ],
                    selected: false
                },
            ],
            supplierTable: [
                {
                    id: 1,
                    number: "П000341",
                    tel: "89765431234",
                    email: "tts@mail.ru",
                    inn: "3736788298",
                    kpp: "146444545",
                    date1: "2020-02-14",
                    date2: "2020-02-17",
                    contract: 'Договор № 341',
                    supplier: 'ТТС',
                    status: "Отправлено",
                    parts: [
                        {
                            id: 1,
                            art: "8K0941597B",
                            desc: "Блок ксеноновой лампы Skoda, VW, Audi",
                            col: 1,
                            price: 3849,
                            selected: false
                        },
                    ],
                    selected: false
                },
                {
                    id: 2,
                    number: "П000342",
                    tel: "89765431234",
                    email: "tts@mail.ru",
                    inn: "3736788298",
                    kpp: "146444545",
                    date1: "2020-02-15",
                    date2: "2020-02-18",
                    contract: 'Договор № 342',
                    supplier: 'ТТС',
                    status: "Отправлено",
                    parts: [
                        {
                            id: 3,
                            art: "5Q0201801",
                            desc: "Абсорбер (фильтр угольный) Skoda, VW, Audi, Seat",
                            col: 2,
                            price: 692,
                            selected: false
                        }
                    ],
                    selected: false
                },
                {
                    id: 3,
                    number: "П000343",
                    tel: "89765431234",
                    email: "tts@mail.ru",
                    inn: "3736788298",
                    kpp: "146444545",
                    date1: "2020-03-01",
                    date2: "2020-03-06",
                    contract: 'Договор № 342',
                    supplier: 'ТТС',
                    status: "Отправлено",
                    parts: [
                        {
                            id: 5,
                            art: "5Q1614724",
                            desc: "Трубка тормозная Skoda, VW, Audi, Seat",
                            col: 6,
                            price: 879,
                            selected: false
                        },
                        {
                            id: 6,
                            art: "5EU807421B",
                            desc: "Бампер задний Skoda Octavia (A7) 2013>",
                            col: 8,
                            price: 9214,
                            selected: false
                        }
                    ],
                    selected: false
                },
                {
                    id: 4,
                    number: "П000344",
                    tel: "89172126272",
                    email: "evroavto@mail.ru",
                    inn: "7408024716",
                    kpp: "262345739",
                    date1: "2020-02-01",
                    date2: "2020-02-07",
                    contract: 'Договор № 561',
                    supplier: 'ЕвроАвто',
                    status: "Отправлено",
                    parts: [
                        {
                            id: 7,
                            art: "8K0941597B",
                            desc: "Блок ксеноновой лампы Skoda, VW, Audi",
                            col: 4,
                            price: 3849,
                            selected: false
                        },
                        {
                            id: 8,
                            art: "5Q0201801",
                            desc: "Абсорбер (фильтр угольный) Skoda, VW, Audi, Seat",
                            col: 6,
                            price: 692,
                            selected: false
                        }
                    ],
                    selected: false
                },
                {
                    id: 5,
                    number: "П000345",
                    tel: "89765431234",
                    email: "tts@mail.ru",
                    inn: "3736788298",
                    kpp: "146444545",
                    date1: "2020-04-01",
                    date2: "2020-04-04",
                    contract: 'Договор № 345',
                    supplier: 'ТТС',
                    status: "Отправлено",
                    parts: [
                        {
                            id: 8,
                            art: "5Q0413023FH",
                            desc: "Амортизатор передний Skoda, VW, Audi, Seat",
                            col: 12,
                            price: 3167,
                            selected: false
                        },
                        {
                            id: 9,
                            art: "8K0941597B",
                            desc: "Блок ксеноновой лампы Skoda, VW, Audi",
                            col: 13,
                            price: 3849,
                            selected: false
                        }
                    ],
                    selected: false
                },
            ],
            supplierCatalogTable: [
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
            supplierId: 10000001,
            coef: 1.01,
        }
    }

    componentDidMount() {
        if (localStorage.length === 0) {
            localStorage.setItem('rushTable', JSON.stringify(this.state.rushTable));
            localStorage.setItem('planTable', JSON.stringify(this.state.planTable));
            localStorage.setItem('searchTable', JSON.stringify(this.state.searchTable));
            localStorage.setItem('incomingTable', JSON.stringify(this.state.incomingTable));
            localStorage.setItem('supplierTable', JSON.stringify(this.state.supplierTable));
            localStorage.setItem('supplierCatalogTable', JSON.stringify(this.state.supplierCatalogTable));
            localStorage.setItem('supplierId', JSON.stringify(this.state.supplierId));
            let area = 0;
            this.state.searchTable.forEach(i => area += i.area * i.cols );
            localStorage.setItem("area", JSON.stringify(area));
            localStorage.setItem("area", JSON.stringify(this.state.coef));
        }
    }

    render() {
        return (
            <main className="main">
                <ul className="home-ul">
                    {info.slice(1).map((element) =>
                        <li className="home-li" key={element.id}>
                            <Link to={element.anchor} className="home-a">
                                <img src={element.srcCard} alt={element.alt} className="home-img" />
                                <p className="home-p">{element.text}</p>
                            </Link>
                        </li>
                    )}
                </ul>
            </main>
        );
    }
}

export default HomePage;