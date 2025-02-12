import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ServicesSection = () => {
    return (
        <section className="services-section">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h2>Our Services</h2>
                        <ul>
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={require('../assets/services-image.jpg')} alt="Our Services" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ServicesSection;