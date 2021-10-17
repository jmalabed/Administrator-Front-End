import { Button, Card, Row, Col, Container } from "react-bootstrap";
import BusinessEmployee from "../BusinessEmployee";
import BusinessGuest from "../BusinessGuest";
import BusinessHotdesk from "../BusinessHotdesk";
import BusinessConference from "../BusinessConference";
import Navigation from "../Navigation";

const Business = (props) => {
  return (
    <>
      <Navigation id={props.match.params.id} />
      <Container>
        <Row>
          <Col>
            <Card>
              <BusinessEmployee id={props.match.params.id} />
            </Card>
          </Col>
          <Col>
            <Card>
              <BusinessGuest id={props.match.params.id} />
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card>
              <BusinessHotdesk id={props.match.params.id} />
            </Card>
          </Col>

          <Col>
            <Card>
              <BusinessConference id={props.match.params.id} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Business;
