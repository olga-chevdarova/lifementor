import React, {Component} from 'react';
import ProgressBar_markup from "./_markup/ProgressBar_markup";
import './ProgressBar_main.css';
import {NavLink, Redirect, withRouter, Route, Link } from 'react-router-dom';
import Test from "../../spheres/physical-environment/test";
import ReactDOM from 'react-dom';
import PhysicalEnvironment_start from "../../spheres/physical-environment/stages/start/PhysicalEnvironment_start";
import PhysicalEnvironment_analysis from "../../spheres/physical-environment/stages/analysis/PhysicalEnvironment_analysis";
const arr = [
    {
        name: "Начало",
        path: "/start"
    },
    {
        name: "Анализ",
        path: "/analysis"
    },
    {
        name: "Цель",
        path: "/goal"
    },
    {
        name: "План действий",
        path: "/plan"
    }

];

const newarr = [
    'Начало', 'Анализ', 'Цель', 'План действий'
];

let num =1;
let num2 =0;




class ProgressBar_main extends Component {
    constructor() {

        super();
        this.state= {
            activeLink: arr[num].path,
        };

    }
    nexty() {
        this.setState({
            toDashboard: true
        })
    }
    tt() {
        if(num < arr.length-1) {
            num= num+1;
        }
        this.setState({
            activeLink: arr[num].name,
        })
        return <Redirect to={this.props.page + "/analysis"}/>
    }

    chnn() {
        if(num < arr.length-1) {
            num= num+1;
        }
        this.setState({
            activeLink: arr[num].path,
        });

        const elem =  document.getElementsByClassName('progress-bar');
        if(num2 < elem.length-1) {
            num2= num2+1;
        }
        elem[num2].classList.add("bg-success");

    }
    render() {

        // if (this.state.toDashboard === true) {
        //     return <Redirect to={this.props.page + "/analysis"}/>
        // }
        return (

            <div className="progress_bar row ">
                {/*{arr.map((point, index) =>*/}
                {/*<div className={"progress_link_" + +index} > <NavLink to={this.props.page + point.path}>{point.name}</NavLink></div>*/}
                {/*)}*/}
                <br/>
                {/*<button onClick={this.tt.bind(this)}>*/}
                {/*Next*/}
                {/*</button>*/}

                <div class="progress">
                    <div className="progress-bar bg-success"  role="progressbar"  aria-valuenow="1" aria-valuemin="0" aria-valuemax="100">Начало</div>
                    <div className="progress-bar"   role="progressbar"  aria-valuenow="1" aria-valuemin="0" aria-valuemax="100">Анализ</div>
                    <div className="progress-bar"  role="progressbar"  aria-valuenow="1" aria-valuemin="0" aria-valuemax="100">Цель</div>
                    <div className="progress-bar"  role="progressbar"  aria-valuenow="1" aria-valuemin="0" aria-valuemax="100">План действий</div>
                </div>
                <Route exact path="/physical-environment/" component={PhysicalEnvironment_start} />
                <Route exact path="/physical-environment/analysis" component={PhysicalEnvironment_analysis} />
                <div className="nn">
                    <button className="btn btn-success" >  <Link  to={this.props.page + this.state.activeLink} onClick={this.chnn.bind(this)}>Начать</Link></button>
                </div>
                {/*<div className="progress_link_1 " > <NavLink to={this.props.page + "/start"}>Начало</NavLink></div>*/}
                {/*<div className="progress_link_3">   <NavLink to={this.props.page + "/analysis"}>Анализ</NavLink></div>*/}
                {/*<div className="progress_link_2"> <NavLink  to={this.props.page + "/goal"}>Цель</NavLink></div>*/}
                {/*<div className="progress_link_4">    <NavLink to={this.props.page + "/plan"}>План действий</NavLink> </div>*/}


            </div>

        );
    }
}

export default ProgressBar_main;