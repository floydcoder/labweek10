import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      address: '',
      secondaryAddress: '',
      city: '',
      postalCode: '',
    };
    this.provinces = [
      'Alberta',
      'British Columbia',
      'Manitoba',
      'New Brunswick',
      'Newfoundland and Labrador',
      'Nova Scotia',
      'Ontario',
      'Prince Edward Island',
      'Quebec',
      'Saskatchewan',
    ];
  }
  onValueChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmitForm = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <Container fluid='sm'>
        <h1>Data Entry Form on a Class Component</h1>
        <Form>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='email'
                value={this.state.email}
                onChange={(event) => this.onValueChange(event)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId='formGridName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder='Full Name'
                type='text'
                name='name'
                value={this.state.name}
                onChange={(event) => this.onValueChange(event)}
              />
            </Form.Group>
          </Row>
          <Form.Group className='mb-3' controlId='formGridAddress1'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder='1234 Main St'
              type='text'
              name='address'
              value={this.state.address}
              onChange={(event) => this.onValueChange(event)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              placeholder='Apartment, studio, or floor'
              type='text'
              name='secondaryAddress'
              value={this.state.secondaryAddress}
              onChange={(event) => this.onValueChange(event)}
            />
          </Form.Group>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder='Toronto'
                type='text'
                name='city'
                value={this.state.city}
                onChange={(event) => this.onValueChange(event)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>Province</Form.Label>
              <Form.Select
                defaultValue='Choose...'
                onChange={this.onValueChange}
                name='provinces'>
                {this.provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId='formGridPostalCode'>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                placeholder='XXX XXX'
                type='text'
                name='postalCode'
                value={this.state.postalCode}
                onChange={(event) => this.onValueChange(event)}
              />
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Col md={{ span: 3, offset: 4 }}>
              <Form.Group as={Col} controlId='formGridTerms'>
                <Form.Check
                  type='checkbox'
                  label='Agree Terms and Condition?'
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col md={{ span: 3, offset: 4 }}>
              <Form.Group as={Col} controlId='formGridTerms'>
                <Button
                  className='ms-5'
                  variant='success'
                  type='submit'
                  onClick={this.onSubmitForm}>
                  Submit
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
