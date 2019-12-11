import React, { Component } from 'react';
import Plan from './Plan'

export class Plans extends Component {
  render() {
    return this.props.plans.map((plan) => (
      <Plan plan={plan} />
    ))
  }
}

export default Plans;
