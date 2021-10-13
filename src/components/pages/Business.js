import { Button } from "react-bootstrap";
import BusinessEmployee from "../BusinessEmployee";
import BusinessHotdesk from "../BusinessHotdesk";
import BusinessConference from "../BusinessConference";

const Business = (props) => {
  return (
    <>
      <a href={`/${props.match.params.id}/checkin`}>Guest Check-in</a>
      <BusinessEmployee id={props.match.params.id} />
      <br />
      <BusinessHotdesk id={props.match.params.id} />
      <br />
      <BusinessConference id={props.match.params.id} />
      <br />
    </>
  );
};
export default Business;
