import { Button } from "react-bootstrap";
const BusinessHotdesk = (props) => {
  return (
    <>
      <h2>Hotdesk</h2>
      <Button variant="success" href={`${props.id}/hotdesk/add`}>
        Add Hotdesk
      </Button>
    </>
  );
};
export default BusinessHotdesk;
