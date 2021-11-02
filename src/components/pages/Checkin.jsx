import { useState, useEffect } from "react";
import React from "react";
import CheckedIn from "../CheckedIn";
import ReactDOM from "react-dom";
import CheckinDetail from "./CheckinDetail";
import CheckinQr from "./CheckinQr";
import { Form, Button, FloatingLabel, Row, Col } from "react-bootstrap";

const Checkin = (props) => {
  const initialInput = {
    name: "",
    email: "",
    phone: "",
    isEmployee: false,
    isInfected: false,
    business: props.match.params.id,
    dateVisited: new Date().toLocaleDateString(),
  };
  const [input, setInput] = useState(initialInput);
  const [employees, setEmployees] = useState([]);
  const [visiting, setVisiting] = useState("");
  const [guest, setGuest] = useState({});

  const [currentTime, setCurrentTime] = useState(new Date());

  const getEmployees = async () => {
    try {
      const employees = await fetch(
        "https://office-culture.herokuapp.com/person"
      );
      const parsedEmployees = await employees.json();
      console.log(parsedEmployees);
      const filteredBusiness = parsedEmployees.filter(
        (employee) => (employee.business = props.match.params.id)
      );
      const filteredEmployees = filteredBusiness.filter(
        (person) => person.isEmployee
      );
      setEmployees(filteredEmployees);
    } catch (err) {
      console.log(err);
    }
  };

  const handleVisitor = (e) => {
    setVisiting(e.target.value);
    console.log(visiting);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // setVisiting(e.target.visiting);
    console.log(e.target.visiting);
    console.log(input);
  };

  const makeGuest = async () => {
    try {
      const visitor = { ...input, visiting };
      console.log(visitor);
      const configs = {
        body: JSON.stringify(visitor),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const newGuest = await fetch(
        "https://office-culture.herokuapp.com/person",
        configs
      );
      const parsedGuest = await newGuest.json();
      console.log(parsedGuest);
      setGuest(parsedGuest);
      if (parsedGuest._id) {
        props.history.push(
          `/${parsedGuest.business}/checkinQr/${parsedGuest.visiting}/${parsedGuest._id}`
        );
      } else {
        alert("Unable to create user. Please try again.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hitting");
    console.log();
    makeGuest();
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const employee = employees.map((employee) => (
    <option value={employee._id}>{employee.name}</option>
  ));

  return (
    <>
      <h2 className="mt-3 mb-3">Sign in</h2>
      <Row>
        <Col></Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-4 mb-4">
              <Form.Control
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Name"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mt-4 mb-4">
              <Form.Control
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="Email"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mt-4 mb-4">
              <Form.Control
                type="phone"
                id="phone"
                name="phone"
                onChange={handleChange}
                placeholder="Phone Number"
              ></Form.Control>
            </Form.Group>
            <Form.Group name="visiting" id="visiting" onChange={handleVisitor}>
              <FloatingLabel
                controlId="floatingSelect"
                label="I am here to visit:"
                className="mt-5 mb-5"
              >
                <Form.Select>
                  <option value={false}>Select one...</option>
                  {employee}
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
            <br></br>
            <Button
              className="mt-5"
              variant="light"
              href={`/business/${props.match.params.id}`}
            >
              Back to Business
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default Checkin;
