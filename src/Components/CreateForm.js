import React, { Component } from 'react';
import { Modal, Button, Form, Col, } from 'react-bootstrap';

class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            country: '',
            language: '',
            keyword: '',
            description: '',
            startDate: '',
            endDate: '',
            productImage: ''
        };
    }

    handleChange = field => event => {
        const newState = {};
        newState[field] = event.target.value;
        this.setState(newState);
    };
    handleSubmit = () => {

    }
    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add New Spotlight
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        value={this.state.title}
                                        onChange={this.handleChange('title')}
                                        type="text"
                                        placeholder="Title"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCountry">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control value={this.state.country} onChange={this.handleChange('country')} as="select" defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>India</option>
                                        <option>USA</option>
                                        <option>China</option>
                                        <option>London</option>
                                        <option>Spain</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridDiscription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control value={this.state.description} onChange={this.handleChange('description')} type="text" placeholder="Description" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridKeyword">
                                    <Form.Label>Keyword</Form.Label>
                                    <Form.Control value={this.state.keyword} onChange={this.handleChange('keyword')} type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLanguage">
                                    <Form.Label>Language</Form.Label>
                                    <Form.Control value={this.state.language} onChange={this.handleChange('language')} as="select" defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>Hindi</option>
                                        <option>English</option>
                                        <option>Chinies</option>
                                        <option>Spanish</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridStartDate">
                                    <Form.Label>Start Date</Form.Label>
                                    <Form.Control value={this.state.startDate} onChange={this.handleChange('startDate')} type="Date" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEndDate">
                                    <Form.Label>End Date</Form.Label>
                                    <Form.Control value={this.state.endDate} onChange={this.handleChange('endDate')} type="Date" />
                                </Form.Group>
                            </Form.Row>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Image Url</Form.Label>
                                    <Form.Control type= "text" value={this.state.productImage} onChange={this.handleChange('productImage')} />
                                </Form.Group>
                            </Form>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default CreateForm;
