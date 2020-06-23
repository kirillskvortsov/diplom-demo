import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SeasonTable from "../../Tables/SeasonTable";

class SeasonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      table: [
        {
          id: 1,
          art: "8K0941597B",
          cols: 5,
          colr: 1,
          supp: "VAG",
          price: 3849,
          desc: "Блок ксеноновой лампы Skoda, VW, Audi",
          area: 1,
          sStock: 2,
          cons: 0.1,
          cat: "A",
          coef: 95,
          Ki: 0.93,
          Km: 0.98,
          selected: false,
        },
        {
          id: 2,
          art: "5Q0201801",
          cols: 12,
          colr: 5,
          supp: "VAG",
          price: 692,
          desc: "Абсорбер (фильтр угольный) Skoda, VW, Audi, Seat",
          area: 1,
          sStock: 5,
          cons: 0.5,
          cat: "B",
          coef: 90,
          Ki: 1.13,
          Km: 1.04,
          selected: false,
        },
        {
          id: 3,
          art: "5Q1614724",
          cols: 5,
          colr: 0,
          supp: "VAG",
          price: 879,
          desc: "Трубка тормозная Skoda, VW, Audi, Seat",
          area: 1,
          sStock: 5,
          cons: 0.5,
          cat: "A",
          coef: 95,
          Ki: 1.01,
          Km: 1.02,
          selected: false,
        },
        {
          id: 4,
          art: "5EU807421B",
          cols: 1,
          colr: 0,
          supp: "VAG",
          price: 9214,
          desc: "Бампер задний Skoda Octavia (A7) 2013>",
          area: 2,
          sStock: 1,
          cons: 0.1,
          cat: "C",
          coef: 85,
          Ki: 0.63,
          Km: 0.81,
          selected: false,
        },
        {
          id: 5,
          art: "5Q0413023FH",
          cols: 2,
          colr: 0,
          supp: "VAG",
          price: 3167,
          desc: "Амортизатор передний Skoda, VW, Audi, Seat",
          area: 1,
          sStock: 4,
          cons: 0.8,
          cat: "A",
          coef: 95,
          Ki: 1.12,
          Km: 0.97,
          selected: false,
        },
      ],
    };
  }

  render() {
    return (
      <main className="main main-analytics">
        <div className="analytics-headers">
          <h1 className="page-header">Сезонные коэффициенты</h1>
          <h2 className="sub-header height-48 next-plan">
            До следующего планового заказа: 25 дней
          </h2>
        </div>
        <div className="order-info">
          <h3 className="sub-header order-header">
            Заказ формируется каждые <span className="order-days">30 дней</span>
          </h3>
        </div>
        <SeasonTable data={this.state.table} />
        <div className="analytics-footer">
          <Link to="/AnalyticsPage">
            <Button>Аналитика</Button>
          </Link>
        </div>
      </main>
    );
  }
}

export default SeasonPage;
