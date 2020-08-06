import React, { Component } from 'react';
import item from '../Data/items'
import { render } from 'react-dom';

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
        </table>
        )
    }
}
export default Home;