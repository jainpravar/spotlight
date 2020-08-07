import React, { Component } from 'react';
import CreateForm from './CreateForm';
import Home from '../Components/Home';
import item from '../Data/items'

const allItem = item;

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdate : false,
            showCreatForm: false,
            selectedCheckboxes: new Set(),
            initialValues: {
                title: '',
                country: '',
                language: '',
                keyword: '',
                description: '',
                startDate: '',
                endDate: '',
                productImage: ''
            }
        };
    }
    toggleCheckbox = label => {
        const { selectedCheckboxes } = this.state;
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

    updateSelectdRow = (id) => {
        this.setState({isUpdate : true,showCreatForm : true});
        const data = allItem.find((obj) => obj.id === id);
        this.setState({
            initialValues: {
                title: data.title,
                country: data.country,
                language: data.language,
                keyword: data.keyword,
                description: data.description,
                startDate: data.startDate,
                endDate: data.endDate,
                productImage: data.productImage
            }
        })

    }
   
    handleSubmit = () => {

    }
    render() {
        const {isUpdate} = this.state;
        let closeCreateForm = () => this.setState({ showCreatForm: false });
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">Spotlight</a>

                    <button className="btn btn-outline-success my-2 my-sm-0"
                        onClick={() => this.setState({ showCreatForm: true })}>Create</button>
                    <button className="btn btn-outline-danger my-2 my-sm-0"
                        onClick={this.deleteSelectedRows}>Delete</button>
                </nav>
                <Home
                    selectedCheckboxes={this.state.selectedCheckboxes}
                    toggleCheckbox={this.toggleCheckbox}
                    upadteSelectedRow={this.updateSelectdRow}
                />
                <CreateForm
                    show={this.state.showCreatForm}
                    onHide={() => closeCreateForm()}
                    initialValues = {this.state.initialValues}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}
export default NavBar;

