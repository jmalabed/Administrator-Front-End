import { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
const EmployeeAdd = (props) => {
  const initialInput = {
    name: "",
    email: "",
    isEmployee: true,
    isInfected: false,
    business: props.match.params.id,
    phone: "",
  };
  const [input, setInput] = useState(initialInput);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const addPerson = async (input) => {
    try {
      const configs = {
        body: JSON.stringify(input),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const newPerson = await fetch(
        "https://office-culture.herokuapp.com/person",
        configs
      );
      const parsedPerson = await newPerson.json();
      console.log(parsedPerson);
    } catch (err) {
      console.log(err);
    } finally {
      setInput(initialInput);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson(input);
    alert("Person Added");
  };

  useEffect(() => {
    // console.log("change");
  }, []);

  return (
    <>
      <h1 className="mt-3">Add Employee</h1>
      <Row className="mb-5">
        <Col></Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <br />
            <Form.Group className="mt-3 mb-5">
              <Form.Control
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={input.name}
                placeholder="Name:"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mt-5 mb-5">
              <Form.Control
                type="text"
                id="phone"
                name="phone"
                onChange={handleChange}
                value={input.phone}
                placeholder="Phone:"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mt-5 mb-5">
              <Form.Control
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={input.email}
                placeholder="Email:"
              ></Form.Control>
            </Form.Group>
            <br />
            <Button className="mb-5" type="submit">
              Add!
            </Button>
          </Form>
          <Button variant="light" href={`/business/${props.match.params.id}`}>
            Back to business
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};
export default EmployeeAdd;
