import React, { Component } from 'react';
import CreateForm from './CreateForm';
import {Button, Image} from "react-bootstrap";
import Checkbox from "./CheckBox";

const allItem = [{
    id : 1,
    title: 'Item 1',
    country: 'India',
    language: 'Hindi',
    keyword: 'text',
    spotlight: true,
    description: 'Description 1',
    startDate: Date.now,
    endDate: Date.now,
    productImage : "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
}];
const apiBase = 'http://localhost:8081/'
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdate : false,
            showCreatForm: false,
            selectedCheckboxes: new Set(),
            Items:[],
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
    componentDidMount() {
        fetch(`${apiBase}Spotlight_Details`, {
            mode:'no-cors',
            method: 'get'
        }).then(res => {
                return res.json();
        }).then((data) => {
            this.setState({Items: data});
            console.log('Data',data);
            console.log('Items',this.state.Items);
        }).catch(err => {
            console.log('err', err)
        })
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

    updateSelectedRow = (id) => {
        this.setState({isUpdate : true,showCreatForm : true});
        const data = allItem.find((obj) => obj.id === id);
        this.setState({
            initialValues: {
                title: data.title,
                country: data.country,
                language: data.language,
                keyword: data.keyword,
                description: data.description,
                startDate: String(data.startDate),
                endDate: String(data.endDate),
                productImage: data.productImage
            }
        })
        fetch(`${apiBase}Spotlight_Details`,)

    }

    
    closeCreateForm = () => this.setState({ showCreatForm: false });
    render() {
        const {isUpdate} = this.state;
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">Spotlight</a>

                    <button className="btn btn-outline-success my-2 my-sm-0"
                        onClick={() => this.setState({ showCreatForm: true })}>Create</button>
                    <button className="btn btn-outline-danger my-2 my-sm-0"
                        onClick={this.deleteSelectedRows}>Delete</button>
                </nav>
                <table className = "table">
                    <thead className = "thead-dark">
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
                    {allItem.map((data) => (
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
                                <Image src={data.productImage} style={{height: 50, width: 100}} rounded />
                            </td>
                            <td>
                                <Button variant="primary" onClick={(()=>this.updateSelectedRow(data.id))}>Update</Button>
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
                    initialValues = {this.state.initialValues}
                    isUpdate = {isUpdate}
                />
            </div>
        );
    }
}
export default Dashboard;

