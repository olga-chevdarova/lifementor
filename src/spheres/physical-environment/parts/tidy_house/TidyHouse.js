import React, {Component} from 'react';
import household_chores from "./household_chores";
import './TidyHouse.css';
import bathroom from './bathroom.jpg';

class TidyHouse extends Component {
    constructor() {
        super();
        this.state = {
            filteredArray: new Date().toLocaleString(),
            filter: household_chores.filter(word => word.frequency == 1),
            myPoints: 0,
            percent: 0,
            total:0,
            random:''
        };
        setInterval(() => {
            this.setState( {
                filteredArray: new Date().toLocaleString()
            } )
        }, 1000);
    }

    change() {
        this.setState({
            filter: household_chores.filter(word => word.room == "Ванная")
        })
    }
    change2() {
        this.setState({
            filter: household_chores.filter(word => word.room == "Кухня")
        })
    }
    change3() {
        this.setState({
            filter: household_chores.filter(word => word.room == "Спальня")
        })
    }
    change4() {
        this.setState({
            filter: household_chores.filter(word => word.room == "Прихожая")
        })
    }
    change5() {
        this.setState({
            filter: household_chores.filter(word => word.room == "Вся площадь")
        })
    }
    calc(v) {
        if(v < 7) {
            return 1
        } else if(v < 14) {
            return 2
        } else if(v < 30) {
            return 3
        } else if(v < 60) {
            return 4
        } else if(v < 90) {
            return 5
        }
        else if(v < 150) {
            return 6
        }

    }

    randomdom() {
        let neww = household_chores.filter(word => word.frequency > 3);
        let randomNumber = (Math.floor(Math.random() * neww.length));
        this.setState({
            random: (neww[randomNumber].task)
        });


    }
    componentWillMount() {

        household_chores.map((time) =>
            time.points = ((time.minutes * this.calc(time.frequency)) /10)
        )

    }
    totall() {
        let totall = 0;
        for(let i = 0; i< household_chores.length; i++) {
            totall = +household_chores[i].points + totall;
        }

    }

    componentDidMount() {
        let totall = 0;
        for(let i = 0; i< household_chores.length; i++) {
            totall = +household_chores[i].points + +totall;
        }
        console.log(totall)
    }
    myPoints(event) {
        this.setState({
            myPoints: this.state.myPoints + +event.target.value
        })
    }

    result() {
        return Math.round((this.state.myPoints*100) / 626);

    }
    render() {
        return (
            <div>

                {this.state.random}
                {/*<button onClick={this.randomdom.bind(this)}>Кухня</button>*/}
                <button onClick={this.change2.bind(this)}>Кухня</button>
                <button onClick={this.change.bind(this)}>Ванная</button>
                <button onClick={this.change3.bind(this)}>Спальня</button>
                <button onClick={this.change4.bind(this)}>Прихожая</button>
                <button onClick={this.change5.bind(this)}>Общее</button>
                <button onClick={this.result.bind(this)}>Result</button>
                <div className="row">
                    <div className="col-5">
                        <img className="img-fluid" src={bathroom} alt=""/>
                    </div>

                    <div className="col-7">
                        <p>
                            Есть такое выражение: «ванная – лицо хозяйки дома». Если полотенца несвежие, везде мыльный налет, на зеркале пятна, а по углам пыль, то, возможно, у женщины пониженная самооценка, и есть какие-то комплексы. Стоит помнить, что именно с ванной мы начинаем день. Полезно признаться себе в любви, глядя в сверкающее чистотой зеркало.
                        </p>
                        {this.state.filter.map((task, index) =>
                            <div className="form-check" key={task.task}>
                                <label className="form-check-label">{task.desc}</label>
                                <span>{task.points}</span>
                                <input onClick={this.myPoints.bind(this)} type="checkbox" checked={this.state.checked} value={task.points}/>
                            </div>
                        )}
                    </div>
                </div>
                {this.state.myPoints}
                <br/>
                {this.result() + '%'}
                {/*{this.state.filteredArray}*/}

            </div>

        );
    }
}

export default TidyHouse;