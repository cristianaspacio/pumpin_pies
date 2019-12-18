/**
  Plan Component which is the cards with workout/meal plans
**/
import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export class Plans extends Component {
  render() {
    const { id, title, description } = this.props.plan;

    return (
      <Col sm={6} md={4} lg={3} className="mt-3">
        <Card>
          <Card.Img variant="top" src="http://via.placeholder.com/300" />
          <Card.Body>
            <Card.Title>{ title }</Card.Title>
            <Card.Text>
              { description }
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Col>
    )
  }
}

export default Plans;
