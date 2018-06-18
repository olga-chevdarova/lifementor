import React, {Component} from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './Navigation.css'
import Routes from "../../Routes";


const Navigation = (props) => {

    return (
        <BrowserRouter>
            <div>
                <h1>Сферы</h1>
                <div className="navigation_sphearsTabs flex">
                    <div className="sphearsPanel"></div>
                    <NavLink className="sphearsTab" exact to="/">Главная</NavLink>
                    <NavLink className="sphearsTab" to="/career">Карьера</NavLink>
                    <NavLink className="sphearsTab" to="/relationships">Отношения</NavLink>
                    <NavLink className="sphearsTab" to="/finances">Финансы</NavLink>
                    <NavLink className="sphearsTab" to="/health">Здоровье</NavLink>
                    <NavLink className="sphearsTab" to="/rest">Развл/отдых</NavLink>
                    <NavLink className="sphearsTab" to="/personal-growth">Личн рост</NavLink>
                    <NavLink className="sphearsTab" to="/physical-environment/">Физ. окруж</NavLink>
                    <NavLink className="sphearsTab" to="/persona">Имидж</NavLink>
                </div>
                <Routes/>
            </div>
        </BrowserRouter>
    );
};

export default Navigation;