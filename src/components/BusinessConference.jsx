import { Button } from "react-bootstrap";
const BusinessConference = (props) => {
  return (
    <>
      <h2>ConferenceRooms</h2>
      <Button variant="success" href={`${props.id}/conference/add`}>
        Add Conference Room
      </Button>
    </>
  );
};
export default BusinessConference;
