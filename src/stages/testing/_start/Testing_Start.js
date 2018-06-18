import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import './Testing_Start.css';

class TestingStart extends Component {
    constructor() {
        super();
        this.state = {
            startTest: false
        }
        this.startTest = this.startTest.bind(this);

    }

    startTest() {
        this.setState({
            startTest:true
        })
    }
    render() {
        if (this.state.startTest === true) {
            return <Redirect to={this.props.path + '/testing'} />
        }
        return (
            <div className="container">
                <div className="flex">
                    <div className="flex-img">
                        <img src={this.props.picture} alt=""/>
                    </div>
                    <div className="flex-text">
                        <h2>{this.props.name}</h2>
                        <div className="sphere-desc_text">
                            <blockquote>
                                <p>
                                    {this.props.quote.text}
                                </p>
                                <cite>   {this.props.quote.author}</cite>
                            </blockquote>
                            {this.props.textDesc}
                        </div>
                        <div className="btn-test_wrap">
                            <button className="btn_test" onClick={this.startTest}>Начать</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default TestingStart;