import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Main from "./spheres/main/main";
import PhysicalEnvironment_analysis from "./spheres/physical-environment/stages/analysis/PhysicalEnvironment_analysis";
import Testing_Start from "./stages/testing/_start/Testing_Start";
import Carrer from "./spheres/career/carrer";
import Relationships from "./spheres/relationships/relationships";
import CarrerTesting from "./spheres/career/CarrerTesting";
import IndexStart from "./spheres/index/_start/IndexStart";
import PhysicalEnvironmentStart from "./spheres/physical-environment/_start/PhysicalEnvironmentStart";
import PhysicalEnvironmentTesting from "./spheres/physical-environment/_testing/PhysicalEnvironmentTesting";


class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={IndexStart} />
                <Route exact path="/career" component={Carrer}/>
                <Route exact path="/physical-environment" component={PhysicalEnvironmentStart}/>
                <Route  path="/physical-environment/testing" component={PhysicalEnvironmentTesting}/>
                {/*<Route path="/career/testing" component={CarrerTesting}/>*/}
                <Route path="/relationships" component={Relationships}/>
            </div>
        );
    }
}

export default Routes;