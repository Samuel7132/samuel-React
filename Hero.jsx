import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BackgroundImage from "../assets/hero-background.png";

const HeroSection = () => {
    return (
        <section className="hero-section" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h1>Welcome to Lucent Innovation</h1>
                        <p>Innovative solutions for a brighter future.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;
