import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import item from '../Data/items'

class Home extends Component {
    render() {
    return(
        <table className = "table">
            <thead className = "thead-dark">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Discription</th>
                    <th scope="col">Country</th>
                    <th scope="col">Product Image</th>
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
                    <Image src='https://ibb.co/25Tqzdn' rounded />
                </tr>
            ))}
            </tbody>
        </table>
        )
    }
}
export default Home;
