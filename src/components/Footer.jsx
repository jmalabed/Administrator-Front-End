import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col md={4} xs={12} className="footer-column">
          Contact
        </Col>
        <Col md={4} xs={12} className="footer-column"></Col>
        <Col md={4} xs={12} className="footer-column">
          Github:
          <br />
          <a href="https://github.com/jmalabed" target="_blank">
            Jared
          </a>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
