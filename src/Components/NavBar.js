import React, { Component } from 'react';
import CreateForm from './CreateForm';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {showCreatForm : false};
    } 
    render() {
        let closeCreateForm = () => this.setState({showCreatForm : false});
        return (
             <div>
                <nav className ="navbar navbar-light bg-light">
                    <a className ="navbar-brand" href="#">Spotlight</a>

                    <button className = "btn btn-outline-success my-2 my-sm-0"
                            onClick={()=> this.setState({showCreatForm: true})}>Create</button>
                </nav>
                <CreateForm
                    show = {this.state.showCreatForm}
                    onHide = {()=>closeCreateForm()}                
                />
            </div>
        );
    }
}
export default NavBar;

