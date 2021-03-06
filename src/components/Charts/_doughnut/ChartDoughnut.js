import React, {Component} from 'react';
import {Doughnut, defaults} from 'react-chartjs-2';
defaults.global.legend.position = "bottom";

let index=0;

class ChartDoughnut extends Component {
    constructor() {
        super();
        this.state = {
            bgColor: [
                "#5acc52",
                "#dcf2da",
                "#dcf2da"
            ]
        }
    }

    change() {

        if(index ===0) {
            this.setState({
                bgColor: [
                    "#5acc52",
                    "#5acc52",
                    "#dcf2da"
                ]
            });
            index = index+1;
        }   else if(index ===1) {
            this.setState({
                bgColor: [
                    "#5acc52",
                    "#5acc52",
                    "#5acc52"
                ]
            })
            index = index+1;
        }

        console.log(index)
    }

    render() {
        const data = {
            labels: this.props.chartLabels,

            datasets: [
                {
                    data: this.props.chartData,
                    backgroundColor: this.state.bgColor,
                    legend: {
                        display: false,
                        position: 'bottom'
                    }

                }]
        };

        return (
            <div>

                <Doughnut data={data} />
            </div>
        );
    }
}

export default ChartDoughnut;