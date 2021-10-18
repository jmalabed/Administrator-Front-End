import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { setBisToken, clearBisToken } from "../../utility/authToken";
import { Form, Button, Row, Col } from "react-bootstrap";

const Register = (props) => {
  const [input, setInput] = useState({
    name: "",
    pass: "",
  });

  const [currentBis, setCurrentBis] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const registerBis = async (bis) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(bis),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const newBis = await fetch(
        "https://office-culture.herokuapp.com/auth/register",
        configs
      );
      const parsedBis = await newBis.json();
      console.log(parsedBis);
      // Log user that just registered in, setting token and auth for access to site.
      setBisToken(parsedBis.token);
      setCurrentBis(parsedBis.name);
      setIsAuthenticated(parsedBis.isLoggedIn);

      // return parsed bis for use with submitting form function
      return parsedBis;
    } catch (err) {
      console.log(err);
      clearBisToken();
      setIsAuthenticated(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdBis = await registerBis(input);
    if (createdBis) {
      const bisId = createdBis.user._id;
      console.log(bisId);
      props.history.push(`/business/${bisId}`);
    }
  };

  useEffect(() => {
    console.log(input);
  }, [input]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  return (
    <>
      <h1>Register</h1>
      <Row>
        <Col></Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-4 mb-4">
              <Form.Control
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={input.name}
                placeholder="Business name:"
              />
            </Form.Group>
            <Form.Group className="mt-4 mb-4">
              <Form.Control
                type="password"
                id="pass"
                name="pass"
                onChange={handleChange}
                value={input.pass}
                placeholder="Create password:"
              />
              <Button className="mt-5" variant="light" onClick={handleSubmit}>
                Register 
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};
export default Register;
