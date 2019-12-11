import React from 'react';
import Hero from './Hero';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function Landing() {
  return (
    <React.Fragment>
      <Hero />
      <Container fluid>
        <Row className="mt-5 align-items-center" >
          <Col><Image style={{width: '100%', height: '43.7313vw'}} src="http://via.placeholder.com/300" fluid /></Col>
          <Col>
            <h2>Have access to multiple workout plans or make your own.</h2>
            <p>
              Being fit should be a choice that is available to everyone. With
              Pumpin pies anybody can choose a variety of workout plans or make their own
              for different fitness goals.
            </p>
          </Col>
        </Row>
        <Row className="mt-5 align-items-center" >
          <Col>
            <h2>Plan your meals in coordination with your workout plan.</h2>
            <p>
              Fitness does not only mean working out but also watching what you eat.
              Meal planning has become much easier using Pumpin Pies meal planner. Choose
              from variety of diet plans or make your own.
            </p>
          </Col>
          <Col><Image style={{width: '100%', height: '43.7313vw'}} src="http://via.placeholder.com/300" fluid /></Col>
        </Row>
        <Row className="mt-5 align-items-center" >
          <Col><Image style={{width: '100%', height: '43.7313vw'}} src="http://via.placeholder.com/300" fluid /></Col>
          <Col>
            <h2>Customazible calendar to manage plans and stick to them.</h2>
            <p>
              All of your plans can be viewed and customized in Pumpin Pies online
              calendar. You can add, delete, or move workout and meal plans. Sign-up with a
              free account and start fitness plans today.
            </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Landing;
