import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
// import Button from "../../Button/Button";
import "../../Button/Button.css";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      disabled: true,
      emailSent: true,
    });
  };

  render() {
    return (
      <div>
        <h1>Contact Me</h1>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">message</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="3"
                value={this.state.message}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>

            <Button
              className="d-inline-block"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              variant="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              SUBMIT
            </Button>

            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Email Sent!</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline error-msg">Email Not Sent!</p>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

export default Contact;
