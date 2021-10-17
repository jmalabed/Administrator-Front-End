import { useState, useEffect } from "react";
import { setBisToken, clearBisToken } from "../../utility/authToken";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Login = (props) => {
  const [input, setInput] = useState({
    name: "",
    pass: "",
  });
  const [currentBis, setCurrentBis] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const loggedBis = await fetch(
        "https://office-culture.herokuapp.com/auth/login",
        configs
      );
      const parsedBis = await loggedBis.json();
      console.log(parsedBis);
      setBisToken(parsedBis.token);
      setCurrentBis(parsedBis.user);
      setIsAuthenticated(true);
      return parsedBis;
    } catch (err) {
      console.log(err);
      clearBisToken();
      setIsAuthenticated(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loggedBis = await login(input);
    console.log(loggedBis);
    if (loggedBis.bis._id) {
      const bisId = loggedBis.bis._id;
      console.log(bisId);
      if (loggedBis) {
        props.history.push(`/business/${bisId}`);
      } else {
        alert("Account not recognized. Try again.");
        props.history.push("/login");
      }
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  return (
    <>
      <h1 className="mt-3">Login</h1>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mt-5">
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={input.name}
                  placeholder="Business Name:"
                />
              </Form.Group>
              <Form.Group className="mt-5">
                <Form.Control
                  type="password"
                  id="pass"
                  name="pass"
                  onChange={handleChange}
                  value={input.pass}
                  placeholder="Password:"
                />
              </Form.Group>
              <Button className="mt-5 mb-5" type="submit">
                Submit!
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
