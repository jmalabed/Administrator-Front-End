import { Container, Col, Row, Image } from "react-bootstrap";
import github from "./images/github-img.png";
import phone from "./images/phone3.png";
const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col md={4} xs={12} className="footer-column">
          <Image src={phone} className="jm-gHImg pt-5" />
        </Col>
        <Col md={4} xs={12} className="footer-column"></Col>
        <Col md={4} xs={12} className="footer-column">
          <br />
          <a href="https://github.com/jmalabed" target="_blank">
            <Image src={github} className="jm-gHImg mb-5 pt-3" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
