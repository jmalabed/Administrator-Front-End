import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";

const Home = (props) => {
  return (
    <div>
      <div>
        <Container>
          <div className="jm-tagline">
            <h2 className="mt-3">
              The guest administration software of the future.
            </h2>
          </div>
          <div id="about">
            <h4 className="mt-3 mb-5">
              The office culture is an all in one office space management,
              administrative, and COVID notification software.
            </h4>
            <hr className="" />
            <Row>
              <Col>
                <Card>
                  <p className="">
                    <b>
                      Guest Sign in
                      <p>
                        Handle guests with ease on a platform that not only
                        welcomes them into their space, but also helps connect
                        them with the company through notifying the employee
                        requested.
                      </p>
                    </b>
                  </p>
                </Card>
              </Col>
              <Col>
                <Card>
                  <p className="">
                    <b>
                      Covid Notifications
                      <p>
                        Your staff and guests deserve transparent, timely, and
                        direct COVID notifications that will help them feel safe
                        and in the loop. The Administrator connects to everyone
                        that was in the vacinity of a COVID infection via SMS.
                      </p>
                    </b>
                  </p>
                </Card>
              </Col>
              <Col>
                <Card>
                  <p className="">
                    <b>
                      Resource Management
                      <p>
                        Not everyone is an architect or office coordinator.
                        Luckily, this application tracks and neatly organizes
                        the desks and conference rooms are available to staff.
                      </p>
                    </b>
                  </p>
                </Card>
              </Col>
            </Row>

            <h3 className="mb-2 mt-5">
              <a href="/register">Sign up to try it out!</a>
            </h3>
            <p>Already have an account?</p>
            <a href="/login">Sign in</a>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
