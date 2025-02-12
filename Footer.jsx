import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <p>&copy; 2023 Lucent Innovation. All rights reserved.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <ul className="social-links">
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
