import { Button } from "react-bootstrap";
import BusinessEmployee from "../BusinessEmployee";
import BusinessGuest from "../BusinessGuest";
import BusinessHotdesk from "../BusinessHotdesk";
import BusinessConference from "../BusinessConference";

const Business = (props) => {
  return (
    <>
      <Button variant="primary" href={`/${props.match.params.id}/checkin`}>
        Guest Check-in
      </Button>
      <BusinessEmployee id={props.match.params.id} />
      <br />
      <BusinessGuest id={props.match.params.id} />
      <br />
      <BusinessHotdesk id={props.match.params.id} />
      <br />
      <BusinessConference id={props.match.params.id} />
      <br />
    </>
  );
};
export default Business;
