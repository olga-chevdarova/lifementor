import React, {Component} from 'react';
import './testing.css';
import ChartDoughnut from "../../components/Charts/_doughnut/ChartDoughnut";


class Testing extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="flex">
                        <div className="flex-img chart">
                        <ChartDoughnut name="carrerT" chartData={[50,  50]} chartLabels={[
                            "Чистота дома",
                            "Состояние окружающих вещей"
]} />
                        </div>
                        <div className="flex-text">
                            <span className="testing_sphear-name">Физическое окружение </span>
                            <span>это все что нас окружает - природа, здания, предметы.</span>
                            <p>Конечно же, не всегда мы можем повлиять на окружающюю нас обстановку. Вряд ли вам позолят полностью переделать офис, в котором вы работаете на свой вкус или снести полуразрушенное здание, вид которого вызывает у вас тоску. Также, вряд ли вы в одиночку сможете разбить парк вместо стоянки возле своего дома или отреставрировать многоэтажку, в которой живете.</p>
                            <p>
                                Но есть вещи, которе по силам каждому - наладить свой быт, сделать свой дом уютным и комфортным для проживания. Не важно живете вы в большом доме или маленькой квартире, у вас дорогая машина или старый велосипед, не важно сколько стоит ваша мебель и сколько у вас в квартире гаджетов. Любая вещь требует ухода. В чистый, ухоженный дом всегда приятно возвращаться. Если же он весь в пыли и грязи, забит до отказа ненужными вещами и поломонной техникой, нахождение в нем будет вызывать только негативные эмоции.
                            </p>
                            <p>Чтобы добиться гармонии в данной сфере, вам нужно заботиться о 2 составляющих:</p>
                            <b>Чистота дома и Состояние окружающих вас вещей</b>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testing;