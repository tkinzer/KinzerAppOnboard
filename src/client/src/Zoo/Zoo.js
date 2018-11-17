//localhost:5000/api/zoo
//POST with no payload to create a new zoo
//GET with no payload to get a list of zoos
//GET with an :id in the URL will return a single zoo by id

import React, { Component } from "react"

class Zoo extends Component {
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
        return (
            
            <div>
                I am a Zoo!
            </div>
        );
    }
}

export default Zoo