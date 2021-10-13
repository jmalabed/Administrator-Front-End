import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const Notify = (props) => {
  const today = new Date().toLocaleDateString();

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
      <Button variant="danger" onClick={() => notifyAll(today)}>
        Notify
      </Button>{" "}
      <br />
      <a href={`/business/{props.match.params.id}`}>Return</a>
    </>
  );
};

export default Notify;
