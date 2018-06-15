import React, {Component} from 'react';
import './AnalysisPage.css';

import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Main from "../../spheres/main/main";
import PhysicalEnvironment from "../../spheres/physical-environment/PhysicalEnvironment";

const AnalysisPage = (props) => {

    return (
        <BrowserRouter>
        <div className="container-fluid">
            <h1>Сферы Жизни</h1>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink className="nav-link nav-link0 active" to="/">Главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link nav-link_1" to="/career">Карьера</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link nav-link_2" to="/relationships">Отношения</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link nav-link_3" to="/finances">Финансы</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link nav-link_4" to="/health">Здоровье</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link nav-link_5" to="/rest">Развл/отдых</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link nav-link_6" to="/personal-growth">Личн рост</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link nav-link_7" to="/physical-environment/">Физ. окруж</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link nav-link_8" to="/persona">Имидж</NavLink>
                </li>
            </ul>
            <Route exact path="/" component={Main} />
            <Route path="/physical-environment" component={PhysicalEnvironment} />
        </div>
        </BrowserRouter>
    );
};

export default AnalysisPage;