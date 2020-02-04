import React, { Component } from 'react'
import Row from './Row'
import Col from './Col'


export default class Deneme extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>1</Col>
          <Col>2</Col>
        </Row>
        <Row>
          <Col md="8">3</Col>
          <Col md="4">4</Col>
        </Row>
      </div>
    )
  }
}
