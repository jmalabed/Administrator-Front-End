import { Button } from "react-bootstrap";
import { useState } from "react";

const Notify = (props) => {
  const [time, setTime] = useState(new Date().toLocaleDateString());
  // Standard state variables for TWILIO
  const [message, setmessage] = useState({
    to: "",
    body: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  // Need to define employees to send message to
  const [employees, setEmployees] = useState();
  // Need to identify visitors that were present on that day
  const [visitors, setVisitors] = useState();

  // Need get routes for employees and people.
  // Filter by date visited
  // build list of people that are infected

  // Build message and define fetch route to back-end API at route: /api/messages

  const notifyAll = (date) => {
    console.log("notifying", date);
    alert("The necessary people have been notified.");
    return;
  };
  return (
    <>
      <h1>Notify</h1>
      <p>
        A notification will be sent out to all employees and guests that were
        present within the last 72 hours.
      </p>
      <Button variant="danger" onClick={() => notifyAll(time)}>
        Notify
      </Button>{" "}
      <br />
      <a href={`/business/${props.match.params.id}`}>Return</a>
    </>
  );
};

export default Notify;
