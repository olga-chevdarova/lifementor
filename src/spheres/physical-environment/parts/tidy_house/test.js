import React, {Component} from 'react';
import neww from "./household_chores";
import Kitchen from "./kitchen/kitchen";
let total;
class Testt extends Component {
    constructor(){
        super();
        this.state = {
            myPoints: 0,
            width: '20%',
            filter: neww.filter(word => word.room == "kitchen"),
        }
    }

    bathroom() {
        this.setState({
            filter: neww.filter(word => word.room == "bathroom")
        })
    }
    bedroom() {
        this.setState({
            filter: neww.filter(word => word.room == "bedroom")
        })
    }
    hall() {
        this.setState({
            filter: neww.filter(word => word.room == "hall")
        })
    }
    all() {
        this.setState({
            filter: neww.filter(word => word.room == "all")
        })
    }
    change5() {
        this.setState({
            filter: neww.filter(word => word.room == "Вся площадь")
        })
    }
    calcCoeff(frequence) {
        if(frequence < 7) {
            return 1
        } else if(frequence < 14) {
            return 2
        } else if(frequence < 30) {
            return 3
        } else if(frequence < 60) {
            return 4
        } else if(frequence < 90) {
            return 5
        }
        else if(frequence < 150) {
            return 6
        }

    }
    componentWillMount() {
        neww.map((task) =>
            task.points = ((task.minutes * this.calcCoeff(task.frequency)) /10)
        )
    }

    totalPointsCalc() {
        let totall = 0;
        for(let i = 0; i< neww.length; i++) {
            totall = +neww[i].points + totall;
        }
        return totall;
    }
    taskStatus(event) {
        if(event.target.checked) {
            this.setState({
                myPoints: this.state.myPoints + +event.target.value
            })
        } else {
            this.setState({
                myPoints: this.state.myPoints - +event.target.value
            })
        }

    }

    render() {
        return (
            <div>
                <div class="progress">
                    <div class="progress-bar bg-info" role="progressbar" style={ {width: this.state.width}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <table>
                    <Kitchen filtered={this.state.filter}/>
                    {/*{neww.map( (task, index) =>*/}
                    {/*<tr >*/}
                    {/*<td>{task.desc}</td>*/}
                    {/*<td>{task.room}</td>*/}
                    {/*<td>{task.frequency}</td>*/}
                    {/*<td>{task.points}</td>*/}
                    {/*<input key={task.index} value ={task.points} type="checkbox" checked={this.state.checked} onClick={this.taskStatus.bind(this)}/>*/}
                    {/*</tr>*/}

                    {/*)}*/}
                </table>
                <button>Показать результат</button>
                <div className="result">
                    <div className="row">
                        <div className="col">
                            Total Points: {this.totalPointsCalc()}
                        </div>
                        <div className="col">
                            My Points:   {this.state.myPoints}
                        </div>
                        <div className="col">
                            <b>  Выполнено:   {Math.round((this.state.myPoints * 100)/this.totalPointsCalc())+ '%'}</b>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testt;