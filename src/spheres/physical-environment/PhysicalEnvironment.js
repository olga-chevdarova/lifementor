import React, {Component} from 'react';
import TidyHouse from "./parts/tidy_house/TidyHouse";
import ProgressBar_main from "../../components/ProgressBar_main/ProgressBar_main";

const PhysicalEnvironment = (props) => {

    return (
        <div>
            {/*<TidyHouse/>*/}
            <ProgressBar_main page="/physical-environment"/>

        </div>
    );
};

export default PhysicalEnvironment;