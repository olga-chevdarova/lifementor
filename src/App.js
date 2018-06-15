import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Spheres from "./spheres/Spheres";
import AnalysisPage from "./Pages/Analysis/AnalysisPage";

class App extends Component {
    render() {
        return (
            <div className="App">
              <AnalysisPage/>
            </div>
        );
    }
}

export default App;
