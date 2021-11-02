import { useState, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
import moment from "moment";
import QrCode from "../QrCode";

const CheckinQr = (props) => {
  return (
    <>
      <h2 className="mt-3 mb-3">Thank you for checking in.</h2>
      <Container>
        <Card className="d-flex justify-content-center align-items-center">
          <QrCode
            link={`office-culture.surge.sh/${props.match.params.bId}/checkin/${props.match.params.eId}/${props.match.params.gId}`}
          />
        </Card>
      </Container>
    </>
  );
};
export default CheckinQr;
