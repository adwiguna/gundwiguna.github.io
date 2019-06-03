import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Row className="main-column">
          <Col className="bg-primary">left</Col>
          <Col className="bg-secondary">right</Col>
        </Row>
      </div>
    )
  }
}
