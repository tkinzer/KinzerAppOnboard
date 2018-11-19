import React from "react"

class AnimalCreate extends React.Component {
    
    validate(props) {

    }
    handleSubmit(ev) {
        console.log("Handling the submit of create animal form");
        const payload = [];
        //map each input to a key:value pair to add to payload
        //by form.id: 

        //THEN -> POST to API
    }
    render() {
        //For each animal field add an input to update the db
        return (
            <form id="form_create_animal" onSubmit={this.handleSubmit}>
                <input type="text" id="form_animal-name" placeholder="the name of this animal species"/>
                {/* <input type="text" id="form_animal-quanitity" placeholder="Number of the animals to add: ex. 1" />
                 */}
                
                <input onClick={this.handleSubmit} type='button' title="Create Animal" value="Create Animal"/>
            </form>
        );
    }
}

export default AnimalCreate