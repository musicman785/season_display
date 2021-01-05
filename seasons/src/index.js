import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";



class App extends Component {
    render() {
        return <SeasonDisplay />
    }
};


ReactDOM.render(<App />, document.querySelector("#root"));