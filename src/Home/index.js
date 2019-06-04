import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'
import { Link } from 'react-router-dom'

import pp from '../assets/images/profile.jpg'
import Profile from './Profile'
import Educations from './Educations'
import Skills from './Skills'
import WorkingExp from './WorkingExp'
import Portfolios from './Portfolios'

export default class Home extends Component {
  render() {
    return (
      <Container className="home">
        <Row>
          <Col className="bg-light py-4 text-center shadow-sm ">
            <div className="text-center display-4">Your Really Complete Name</div>
          </Col>
        </Row>
        <Row className="body-column">
          <Col lg="3" className="bg-primary py-2 shadow">
            <div className="d-flex flex-column align-items-center">
              <div
                className="profile-picture my-4"
                style={{
                  backgroundImage: `url(${pp})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                }}
              />
              <div className="side-menu py-3 d-flex flex-column align-items-center">
                <Link to="#">Profile</Link>
                <Link to="#">Education</Link>
                <Link to="#">Skills</Link>
                <Link to="#">Work Experiences</Link>
                <Link to="#">Portfolios</Link>
              </div>
            </div>
          </Col>
          <Col lg="9" className="py-4">
            <Container>
              <Profile />
              <Educations />
              <Skills />
              <WorkingExp />
              <Portfolios />
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}
