import React from 'react';
import NavElement from './NavElement'

function Navbar() {
    return(
        <nav class="nav-nav">
            <ul class="nav-ul">
                <NavElement 
                    alt="home" 
                    src="assets/home.png" 
                    text="Домой"
                />
                <NavElement 
                    alt="search" 
                    src="assets/search.png" 
                    text="Поиск"
                />
                <NavElement 
                    alt="tasks" 
                    src="assets/list.png" 
                    text="Задачи"
                />
                <NavElement 
                    alt="rush" 
                    src="assets/timer.png" 
                    text="Срочный заказ"
                />
                <NavElement 
                    alt="plan" 
                    src="assets/plan.png" 
                    text="Плановый заказ"
                />
                <NavElement 
                    alt="supplier" 
                    src="assets/delivery.png" 
                    text="Заказы поставщику"
                />
                <NavElement 
                    alt="analytics" 
                    src="assets/chart.png" 
                    text="Аналитика"
                />
            </ul>
        </nav>
    );
}

export default Navbar;