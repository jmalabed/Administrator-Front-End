import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import moment from "moment";

const Notify = (props) => {
  const [time, setTime] = useState(new Date().toLocaleDateString());
  // Standard state variables for TWILIO
  const [message, setMessage] = useState({
    to: "",
    body:
      "this is a test from Jared. You may have been exposed to COVID-19 during your last visit. A positive case has been reported in the last 72 hours.",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  // Need to define employees to send message to XXXX
  const [employees, setEmployees] = useState();
  // Need to identify visitors that were present within range of report XXXXXX
  //  and send text
  const [guests, setGuests] = useState();

  // Need get routes for employees and people.
  // Filter by date visited
  // build list of people that are infected
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

  const getGuests = async () => {
    try {
      const guests = await fetch("https://office-culture.herokuapp.com/person");
      const parsedGuests = await guests.json();
      console.log(parsedGuests);
      const filteredGuests = parsedGuests.filter(
        (person) => !person.isEmployee
      );
      const guestsInRange = filteredGuests.filter((guest) =>
        moment(guest.dateVisited).isAfter(moment(time).subtract(3, "days"))
      );
      console.log("gir", guestsInRange);
      setGuests(guestsInRange);
    } catch (err) {
      console.log(err);
    }
  };

  // Build message and define fetch route to back-end API at route: /api/messages

  const notifyOne = (personPhone) => {
    try {
      setSubmitting(true);
      const configs = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...message, to: personPhone }),
      };
      fetch("https://office-culture.herokuapp.com/api/messages", configs)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setError(false);
            setSubmitting(false);
            setMessage({ to: "", body: "" });
          } else {
            setError(true);
            setSubmitting(false);
          }
        });
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  const notifyAll = () => {
    const guestNumbers = guests.map((guest) => guest.phone);
    const empNumbers = employees.map((employee) => employee.phone);
    const allNumbers = [...guestNumbers, ...empNumbers];
    console.log(allNumbers);
    for (var i = 0; i < allNumbers.length; i++) {
      notifyOne(allNumbers[i]);
    }
  };

  useEffect(() => {
    getEmployees();
    getGuests();
  }, []);

  return (
    <>
      <h1 className="mt-3 mb-5">Notify</h1>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Card className="p-3">
              <p>
                A notification will be sent out to all employees and guests that
                were present within the last 72 hours.
              </p>
              <Button className="mt-3" variant="danger" onClick={notifyAll}>
                Notify
              </Button>{" "}
              <br />
              <a href={`/business/${props.match.params.id}`}>Return</a>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Notify;
