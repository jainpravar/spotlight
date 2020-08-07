import React, { Component } from 'react';
import {Image, Button} from 'react-bootstrap';
import item from '../Data/items'
import Checkbox from "./CheckBox";

class Home extends Component {
    constructor() {
        super();
        this.state={
            isChecked: false,
        }
    }

    render() {
        const {toggleCheckbox, upadteSelectedRow} = this.props;
    return(
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
            {item.map((data) => (
                <tr>
                    <td>
                        {data.Title}
                    </td>
                    <td>
                        {data.Discription}
                    </td>
                    <td>
                        {data.Country}
                    </td>
                    <td>
                        <Image src={data.productImage} style={{height: 50, width: 100}} rounded />
                    </td>
                    <td>
                       <Button variant="primary" onClick={(()=>upadteSelectedRow(data.id))}>Update</Button>
                    </td>
                    <td>
                        <Checkbox
                            label={data.id}
                            handleCheckboxChange={toggleCheckbox}
                        />
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        )
    }
}
export default Home;
