import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";



class App extends Component {

    state = {
        lat: null,
        errorMessage: ""
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        )
    };



    render() {
        return <SeasonDisplay />
    }
};


ReactDOM.render(<App />, document.querySelector("#root"));