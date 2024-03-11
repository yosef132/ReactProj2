import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import busImage from '../images/Bus.jpg';
import busImage2 from '../images/Bus2.jpg';

export default function HomeBody() {

  return (
    <Container className="my-5">

      {/* Existing content */}
      <div className="text-center">
        <h1>Discover the Beauty of <br /> Israel's Travel Destinations</h1>
        <p className="my-4">
          Experience the rich history, stunning landscapes, and vibrant culture of Israel.<br/>Book your dream trip today!
        </p>
        <Button variant="primary" className="me-2">Book</Button>
        <Button variant="secondary">Learn More</Button>
        <div className="mt-4">
          <img src={busImage} className="img-fluid" alt="Bus" />
        </div>
      </div>

      <Row className="mt-5">
      </Row>

      {/* New content */}
      <Row className="mt-5">
        <Col md={6} className="text-left">
          <h2>Discover the Ease of Booking Bus Trips Across Israel</h2>
          <p className="my-3">
            Experience the convenience of booking bus trips to various destinations 
            across Israel with our user-friendly platform. Browse through a wide 
            selection of routes, choose your preferred departure time, and secure your 
            seat in just a few clicks.
          </p>
          <Row className="mt-3">
            <Col xs={12} sm={6}>
              <div className="my-2">
                {/* Replace these with actual icons */}
                <div className="feature-icon">⬢</div>
                <h5>Convenient</h5>
                <p>Browse through a wide selection of bus routes and choose your preferred departure time.</p>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="my-2">
                {/* Replace these with actual icons */}
                <div className="feature-icon">⬢</div>
                <h5>Efficient</h5>
                <p>Secure your seat on the bus of your choice in just a few clicks.</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6} className="text-center">
          <img src={busImage2} className="img-fluid" alt="Scenic Bus View" style={{ marginTop: '2rem' }} />
        </Col>
      </Row>
     
    </Container>

    
  );
}
