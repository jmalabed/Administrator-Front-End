import { Button, Row, Col, Table } from "react-bootstrap";
const BusinessConference = (props) => {
  return (
    <div className="jm-card">
      <h2 className="jm-th">Conference Rooms</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Occupied</th>
            <th>Time occupied</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
      <Row>
        <Col></Col>
        <Col>
          <Button
            className="mb-3"
            variant="success"
            href={`${props.id}/conference/add`}
          >
            Add Conference Room
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};
export default BusinessConference;
