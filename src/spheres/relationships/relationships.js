import React, {Component} from 'react';
import Testing_Start from "../../stages/testing/_start/Testing_Start";
import Start from "../../markup/_start/Start";
const quote = {
    text:  "Перед тем, как начать улучшать мир, три раза посмотри на собственный дом.",
    author: "Китайская пословица"
};

class Relationships extends Component {
    render() {
        return (
           <Start path="relationships" quote={quote}/>
        );
    }
}

export default Relationships;