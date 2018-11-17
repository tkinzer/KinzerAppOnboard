import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import "./Animals.css"

import map from 'lodash/map';

import Animal from "./Animal"

class Animals extends Component {
    constructor(props) {
        super(props);
        
    }
    
    componentWillMount() {
        console.log("Hello");
    }

    componentDidMount() {
        console.log("I am your trusty friend, Boop");
    }

    viewAnimal(key) {
        console.log("Getting animal by key. Key: " + key);

    }

    render() {
        const { animals } = this.props;
        return (
            <div>
                <h1>Animals</h1>
                {
                    map(animals, (animal,key) => {
                        return <Animal
                                key={key} 
                                animal={animal}
                                />;
                    })
                }
            </div>

        );
    }
}

export default Animals