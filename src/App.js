import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from "./components/navigation/Navigation";


class App extends Component {
    render() {
        return (
            <div className="App">
            <Navigation/>

              {/*<AnalysisPage/>*/}
            </div>
        );
    }
}

export default App;
