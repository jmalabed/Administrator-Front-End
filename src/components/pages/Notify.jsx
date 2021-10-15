import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

// Twilio Credentials
// To set up environmental variables, see http://twil.io/secure
const accountSid =
  process.env.TWILIO_ACCOUNT_SID || "AC1309820e1227cdef465de40a6b6b60a0";
const authToken =
  process.env.TWILIO_AUTH_TOKEN || "60f6470444ab9e0a281bec2403007342";
console.log(accountSid, authToken);
// require the Twilio module and create a REST client
const client = require("twilio")(accountSid, authToken);

const Notify = (props) => {
  const today = new Date().toLocaleDateString();

  client.messages
    .create({
      to: "+14086934921",
      from: "+13185366423",
      body: "Whats up baby",
    })
    .then((message) => console.log(message.sid));

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
      <a href={`/business/${props.match.params.id}`}>Return</a>
    </>
  );
};

export default Notify;
