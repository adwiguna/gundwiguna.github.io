import React, { Component } from 'react'
import { Row, Col, Container, Button } from 'reactstrap'
import { Link as SLink, animateScroll as scroll } from 'react-scroll'

import pp from '../assets/images/profile.jpg'
import Information from './Information'
import Profile from './Profile'
import Educations from './Educations'
import Skills from './Skills'
import WorkingExp from './WorkingExp'
import Portfolios from './Portfolios'
import Licenses from './Licenses'

export default class Home extends Component {
  render() {
    this.skillsRef = null // Create ref object
    return (
      <Container className="home">
        <Row className="header-row">
          <Col className="header-container pb-2 text-center shadow">
            <div className="text-center display-4">I Made Anggun Dwiguna</div>
          </Col>
        </Row>
        <Row className="body-column">
          <Col lg="3" className="py-2 shadow side-container">
            <div className="d-flex flex-column align-items-center">
              <div
                className="profile-picture my-4 "
                style={{
                  backgroundImage: `url(${pp})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                }}
              />
              <Information />
              <div className="side-menu py-3 d-flex flex-column align-items-center border-bottom">
                <SLink smooth to="profile">
                  Profile
                </SLink>
                <SLink smooth to="education">
                  Education
                </SLink>
                <SLink smooth to="skills">
                  Skills
                </SLink>
                <SLink smooth to="workingexp">
                  Work Experiences
                </SLink>
                <SLink smooth to="licenses">
                  {`License & Certification`}
                </SLink>
                <SLink smooth to="portfolios">
                  Portfolios
                </SLink>
              </div>
            </div>
          </Col>
          <Col lg="9" className="py-4 content-container">
            <Container>
              <Profile id="profile" />
              <hr />
              <Educations id="education" />
              <hr />
              <Skills id="skills" />
              <hr />
              <WorkingExp id="workingexp" />
              <hr />
              <Licenses id="licenses" />
              <hr />
              <Portfolios id="portfolios" />
              <hr />
              <div className="d-flex justify-content-center">
                <Button color="primary" size="sm" onClick={() => scroll.scrollToTop()}>
                  To Top
                </Button>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}
