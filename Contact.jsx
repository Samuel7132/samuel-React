import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h2>Get in Touch</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="name">Name:</label>
                                <input type="text" id="name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactSection;
