import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import "./Animals.css"

import map from 'lodash/map';
import CreateAnimal from './Animal.create'
import Animal from "./Animal"

class Animals extends Component {
    constructor(props) {
        super(props);
        
    }
    
    componentWillMount() {
        console.log("Animals Dashboard Loading...");
    }

    componentDidMount() {
        console.log("Loading animals");
        //fetch animals from api
    }

    viewAnimal(key) {
        console.log("Getting animal by key. Key: " + key);

    }

    render() {
        const { animals } = this.props;
        return (
            <div>
                <h1>Animals
                    <CreateAnimal />
                </h1>

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