import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h1 className="logo">Lucent Innovation</h1>
                    </Col>
                    <Col xs={12} md={6}>
                        <ul className="header-links">
                            <li>
                                <FontAwesomeIcon icon={faPhone} />
                                <a href="tel:+1234567890">+1 234 567 890</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href="mailto:info@lucentinnovation.com">info@lucentinnovation.com</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
