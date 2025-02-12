import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const AboutSection = () => {
    return (
        <section className="about-section">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={require('../assets/about-image.jpg')} alt="About Us" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutSection;
