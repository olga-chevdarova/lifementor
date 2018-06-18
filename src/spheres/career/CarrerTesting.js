import React, {Component} from 'react';
import Testing from "../../stages/testing/Testing/Chart";

class CarrerTesting extends Component {
    render() {
        return (
       <Testing name="carrerT" chartData={[50, 50, 50]} chartLabels={[
           "Чистота дома",
           "Качество вещей, их исправность",
           "Покупка новых вещей"
       ]} legend = {false}/>
        );
    }
}

export default CarrerTesting;