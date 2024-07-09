import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from '../components/CustomNavbar';

const Assessment = () => {
  return (
    <div>
      <CustomNavbar />
      <Container>
        <Row>
          <Col>
            <h1>Assessment Page</h1>
            <p>This is the assessment page content.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Assessment;
