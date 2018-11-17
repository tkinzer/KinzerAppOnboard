import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import "./Animals.css"

class Animal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
        }

        
    }

    componentWillMount() {
        console.log("Hello");
    }

    componentDidMount() {
        console.log("I am your trusty friend, Boop");
    }

    render() {
        const { animal } = this.props
        return (
            <div>I am an Animal
            </div>

        );
    }
}

export default Animal