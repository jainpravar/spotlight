import React, { Component } from 'react';
import { Modal, Button, Form, Col, } from 'react-bootstrap';

class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tilte: '',
            country: '',
            language: '',
            keyword: '',
            discription: '',
            startDate: '',
            endDate: '',
            productImage: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            tilte: event.target.value.Title,
            country: event.target.country,
            language: event.target.language,
            keyword: event.target.keyword,
            discription: event.target.discription,
            startDate: event.target.startDate,
            endDate: event.target.endDate,
            productImage: event.target.productImage
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
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
                                    <Form.Label>Tilte</Form.Label>
                                    <Form.Control value={this.state.tilte} onChange={this.handleChange} type="text" placeholder="Title" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCountry">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control value={this.state.country} onChange={this.handleChange} as="select" defaultValue="Choose...">
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
                                <Form.Label>Discription</Form.Label>
                                <Form.Control value={this.state.discription} onChange={this.handleChange} type="text" placeholder="Discription" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridKeyword">
                                    <Form.Label>Keyword</Form.Label>
                                    <Form.Control value={this.state.keyword} onChange={this.handleChange} type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLanguage">
                                    <Form.Label>Language</Form.Label>
                                    <Form.Control value={this.state.language} onChange={this.handleChange} as="select" defaultValue="Choose...">
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
                                    <Form.Control value={this.state.startDate} onChange={this.handleChange} type="Date" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEndDate">
                                    <Form.Label>End Date</Form.Label>
                                    <Form.Control value={this.state.endDate} onChange={this.handleChange} type="Date" />
                                </Form.Group>
                            </Form.Row>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Image Url</Form.Label>
                                    <Form.Control type= "text" value={this.state.productImage} onChange={this.handleChange} />
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
