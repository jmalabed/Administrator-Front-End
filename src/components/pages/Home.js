import { Container, Row, Col, Card, Fade } from "react-bootstrap";
import { useEffect, useState } from "react";
import officeVisitors from "./../images/office-visitors.jpeg";
import covidnotifications from "./../images/covidnotifications.jpeg";
import hotdesking from "./../images/hotdesking.jpeg";
import Officefloorplan from "./../images/Officefloorplan.jpeg";

const Home = (props) => {
  const [open, setOpen] = useState({
    one: false,
    two: false,
    three: false,
  });

  const handleClick = (a) => {
    setOpen({ ...open, [a]: !open[a] });
  };

  return (
    <div>
      <div>
        <Container>
          <div className="jm-tagline">
            <h2 className="mt-5">
              The guest administration software of the{" "}
              <span className="jm-fun">future</span>.
            </h2>
          </div>
          <div className="d-flex flex-column w-100 align-items-center">
            <h4 className=" d-flex mt-3 mb-5 jm-textSplash align-items-center justify-content-center w-25">
              The Administrator is an all in one office space management,
              administrative, and COVID notification software.
            </h4>
          </div>
          <hr className="jm-pgbrk" />

          <Row>
            <Col>
              <Card className="bg-dark text-white jm-card">
                <div className="jm-cardImg"></div>
                <Card.Img src={officeVisitors} />
                <Card.ImgOverlay>
                  <Card.Title
                    onClick={() => handleClick("one")}
                    aria-controls="card1"
                    aria-expanded={open.one}
                    className="jm-cardText"
                  >
                    <u>Guest Sign In</u>
                  </Card.Title>
                  <Fade in={open.one}>
                    <div id="card1" className="jm-cardText">
                      Handle guests with ease on a platform that not only
                      welcomes them into their space, but also helps connect
                      them with the company through notifying the employee
                      requested.
                    </div>
                  </Fade>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark text-white jm-card">
                <Card.Img src={covidnotifications} />
                <Card.ImgOverlay>
                  <Card.Title
                    onClick={() => handleClick("two")}
                    aria-controls="card2"
                    aria-expanded={open.two}
                    className="jm-cardText"
                  >
                    <u>Covid Notifications</u>
                  </Card.Title>
                  <Fade in={open.two}>
                    <div id="card2" className="jm-cardText">
                      Your staff and guests deserve transparent, timely, and
                      direct COVID notifications that will help them feel safe
                      and in the loop. The Administrator connects to everyone
                      that was in the vacinity of a COVID infection via SMS.
                    </div>
                  </Fade>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark text-white jm-card">
                <Card.Img src={Officefloorplan} />
                <Card.ImgOverlay>
                  <Card.Title
                    onClick={() => handleClick("three")}
                    aria-controls="card3"
                    aria-expanded={open.three}
                    className="jm-cardText"
                  >
                    <u>Resource Management</u>
                  </Card.Title>
                  <Fade in={open.three}>
                    <div id="card3" className="jm-cardText">
                      Not everyone is an office coordinator. Luckily, this
                      application tracks and neatly organizes the desks and
                      conference rooms that are available to staff, saving time
                      and scheduling headaches.
                    </div>
                  </Fade>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>

          <h3 className="mb-2 mt-5">
            <a href="/register">Sign up to try it out!</a>
          </h3>
          <p className="jm-pText">Already have an account?</p>
          <a href="/login">Sign in</a>
        </Container>
      </div>
    </div>
  );
};

export default Home;
