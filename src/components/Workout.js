import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Filter from './Filter';
import Plans from './Plans'

export class Workout extends Component {
  state = {
    showFilter: false,
    plans: [
      {
        id: 1,
        title: 'Cardio',
        description: 'Cardio is running and walking.'
      },
      {
        id: 2,
        title: 'Strength',
        description: 'To become big boi.'
      },
      {
        id: 3,
        title: 'Acrobatics',
        description: 'Stuff idk what this is.'
      },
      {
        id: 4,
        title: 'Plan 4',
        description: 'I give up.'
      },
      {
        id: 5,
        title: 'Plan 5',
        description: 'I give up.'
      }
    ]
  }

  showFilter = (e) => {
    e.preventDefault();
    this.setState({ showFilter: !this.state.showFilter});
  }

  render () {
    return (
      <React.Fragment>
      <Container fluid className="mt-5">
        <Row className="pl-5 pr-5">
          <Col xs={12}>
              <h1>Workout Programs</h1>
          </Col>
        </Row>
        <div className="d-flex pl-5 pr-5 align-items-center">
          <div className="mr-auto">
            <Button variant="outline-secondary" className="filter_btn" onClick={this.showFilter}>
              <i className="material-icons align-top mr-2">
                filter_list
              </i>
              Filter
            </Button>
          </div>
          <Form inline>
            <Form.Control type="text" placeholder="Search" className="mr-sm-2 mr-2" />
          </Form>
        </div>
        {this.state.showFilter ? <Filter /> : null}
      </Container>
      <Container fluid className="mt-5">
        <Row>
          <Plans plans={this.state.plans} />
        </Row>
      </Container>
      </React.Fragment>
  );
  }
}

export default Workout;
