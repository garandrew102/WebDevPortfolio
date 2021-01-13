import React, { Component } from "react";
import "./Footer.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

class Footer extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Subscribe to get alerts on limited time promotions
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe at any time
          </p>
          <div className="input-areas">
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                className="footer-input"
                name="email"
                type="email"
                placeholder="Email"
              />
              <Button className="footer-btn" type="submit">
                Subscribe
              </Button>
            </Form>
          </div>
        </section>
        <div class="footer-links">
          <div class="footer-link-wrapper">
            <div class="footer-link-items">
              <h4>About Us</h4>
              <Link to="/sign-up">How it works</Link>
              <Link to="/">Testimonials</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Investors</Link>
              <Link to="/">Terms of Service</Link>
            </div>
            <div class="footer-link-items">
              <h4>Contact Us</h4>
              <Link to="/">Contact</Link>
              <Link to="/">Support</Link>
              <Link to="/">Destinations</Link>
              <Link to="/">Sponsorships</Link>
            </div>
          </div>
          <div class="footer-link-wrapper">
            <div class="footer-link-items">
              <h4>Videos</h4>
              <Link to="/">Submit Video</Link>
              <Link to="/">Ambassadors</Link>
              <Link to="/">Agency</Link>
              <Link to="/">Influencer</Link>
            </div>
            <div class="footer-link-items">
              <h4>Social Media</h4>
              <Link to="/">Instagram</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">Youtube</Link>
              <Link to="/">Twitter</Link>
            </div>
          </div>
        </div>
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Andrew G.
            </Link>
          </div>
          <small className="website-rights">Andrew G. © 2020</small>
          <div className="social-icons">
            <a href="/" className="social-icon-link facebook" target="_blank">
              <FaFacebookSquare />
            </a>
            <a href="/" className="social-icon-link instagram" target="_blank">
              <FaInstagramSquare />
            </a>
            <a href="/" className="social-icon-link youtube" target="_blank">
              <FaYoutubeSquare />
            </a>
            <a href="/" className="social-icon-link twitter" target="_blank">
              <FaTwitterSquare />
            </a>
            <a href="/" className="social-icon-link linkedin" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
