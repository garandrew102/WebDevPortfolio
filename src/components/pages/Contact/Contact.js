import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import bluenetwork from "../../../videos/bluenetwork.mp4";
import Axios from "axios";
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

  handleChange = (e) => {
    const target = e.target;
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
    });

    Axios.post("http://localhost:3030/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: true,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <div className="contact">
        <video autoPlay loop muted>
          <source src={bluenetwork} type="video/mp4" />
        </video>

        <div className="form">
          <h1>Let's Connect</h1>
          <Form onSubmit={this.handleSubmit}>
            <div className="name">
              <Form.Group>
                <Form.Label htmlFor="full-name">Name:</Form.Label>
                <Form.Control
                  id="full-name"
                  name="name"
                  type="text"
                  placeholder="Name Here"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </div>
            <div className="email">
              <Form.Group>
                <Form.Label htmlFor="email">Email:</Form.Label>
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Here"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </div>
            <div className="message">
              <Form.Group>
                <Form.Label htmlFor="message">Message:</Form.Label>
                <Form.Control
                  id="message"
                  name="message"
                  as="textarea"
                  rows="5"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </div>
            <div className="contact-btns">
              <Button
                // variant="primary"
                className="contact-btn-style"
                type="submit"
                disabled={this.state.disabled}
              >
                SUBMIT
              </Button>
            </div>
            {this.state.emailSent === true && (
              <p className="success-msg">Email Sent!</p>
            )}
            {this.state.emailSent === false && (
              <p className="error-msg">Email Not Sent!</p>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

export default Contact;
