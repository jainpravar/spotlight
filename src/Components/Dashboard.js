import React, { Component } from 'react';
import CreateForm from './CreateForm';
import { Button, Image } from "react-bootstrap";
import Checkbox from "./CheckBox";

const apiBase = 'http://localhost:8081/'
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdate: false,
            showCreatForm: false,
            selectedCheckboxes: new Set(),
            isDeleteButtonClicked: false,
            Items: [],
            initialValues: {
                id: '',
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
    componentDidMount() {
        this.fetchAllRows();
    }
    fetchAllRows(){
        fetch(`${apiBase}Spotlight_Details`, {
            method: 'get'
        }).then(response => response.json())
            .then(data => {
                this.setState({ Items: data,isDeleteButtonClicked : false })
            })
            .catch(err => console.log('err', err))
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
        console.log('selectedCheckboxes', JSON.stringify(Array.from(selectedCheckboxes)));
        fetch(`${apiBase}multiple_delete`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Array.from(selectedCheckboxes))
        }).then(()=>{
            this.setState({isDeleteButtonClicked : true});
            this.fetchAllRows();
        })
    } 

    updateSelectedRow = (id) => {
        this.setState({ isUpdate: true, showCreatForm: true });
        const data = this.state.Items.find((obj) => obj.id === id);
        this.setState({
            initialValues: {
                id:id,
                title: data.title,
                country: data.country,
                language: data.language,
                keyword: data.keyword,
                description: data.description,
                startDate:data.startDate,
                endDate: data.endDate,
                productImage: data.productImage
            }
        })
        console.log('update',this.state.initialValues);
    }

    handleSubmit = (formData) => {
        if(this.state.isUpdate){
            fetch(`${apiBase}update_data`,{
                method:'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            }).then(() => {
                this.setState({showCreatForm : false, isUpdate : false});
                this.fetchAllRows();
            })
        }else{
        fetch(`${apiBase}insert_data`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).then(() => {
           this.setState({showCreatForm : false});
           this.fetchAllRows();
        })
    }
    }

    closeCreateForm = () => this.setState({ showCreatForm: false });
    render() {
        const { isUpdate, Items, isDeleteButtonClicked } = this.state;
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">Spotlight</a>

                    <button className="btn btn-outline-success my-2 my-sm-0"
                        onClick={() => this.setState({ showCreatForm: true })}>Create</button>
                    <button className="btn btn-outline-danger my-2 my-sm-0" disabled={isDeleteButtonClicked}
                        onClick={this.deleteSelectedRows}>Delete</button>
                </nav>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Discription</th>
                            <th scope="col">Country</th>
                            <th scope="col">Product Image</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Items.map((data) =>(
                            <tr>
                                <td>
                                    {data.title}
                                </td>
                                <td>
                                    {data.description}
                                </td>
                                <td>
                                    {data.country}
                                </td>
                                <td>
                                    <Image src={data.productImage} style={{ height: 50, width: 100 }} rounded />
                                </td>
                                <td>
                                    <Button variant="primary" onClick={(() => this.updateSelectedRow(data.id))}>Update</Button>
                                </td>
                                <td>
                                    <Checkbox
                                        label={data.id}
                                        handleCheckboxChange={this.toggleCheckbox}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <CreateForm
                    show={this.state.showCreatForm}
                    onHide={() => this.closeCreateForm()}
                    initialValues={this.state.initialValues}
                    isUpdate={isUpdate}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}
export default Dashboard;

