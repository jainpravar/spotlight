import React, { Component } from 'react';
import CreateForm from './CreateForm';
import Home from '../Components/Home';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            showCreatForm : false,
            selectedCheckboxes: new Set()
        };
    }
    toggleCheckbox = label => {
        const {selectedCheckboxes } = this.state;
        if (selectedCheckboxes.has(label)) {
            selectedCheckboxes.delete(label);
        } else {
            selectedCheckboxes.add(label);
        }
    }
    deleteSelectedRows = () => {
        const { selectedCheckboxes } = this.state;
        // delete api call
    }
    render() {
        let closeCreateForm = () => this.setState({showCreatForm : false});
        return (
             <div>
                <nav className ="navbar navbar-light bg-light">
                    <a className ="navbar-brand" href="#">Spotlight</a>

                    <button className = "btn btn-outline-success my-2 my-sm-0"
                            onClick={()=> this.setState({showCreatForm: true})}>Create</button>
                    <button className = "btn btn-outline-success my-2 my-sm-0"
                            onClick={this.deleteSelectedRows}>Delete</button>
                </nav>
                 <Home
                     selectedCheckboxes={this.state.selectedCheckboxes}
                     toggleCheckbox={this.toggleCheckbox}
                 />
                 <CreateForm
                    show = {this.state.showCreatForm}
                    onHide = {()=>closeCreateForm()}
                />
            </div>
        );
    }
}
export default NavBar;

