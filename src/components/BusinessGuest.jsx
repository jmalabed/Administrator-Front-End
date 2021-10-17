import { Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const BusinessGuest = (props) => {
  const [guests, setGuests] = useState([]);

  const getGuests = async () => {
    try {
      const guests = await fetch("https://office-culture.herokuapp.com/person");
      const parsedGuests = await guests.json();
      console.log(parsedGuests);
      const filteredGuests = parsedGuests.filter(
        (person) => !person.isEmployee
      );
      setGuests(filteredGuests);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteGuest = async (id) => {
    console.log(id);
    try {
      const configs = {
        method: "DELETE",
      };
      const deletedGuest = await fetch(
        `https://office-culture.herokuapp.com/person/${id}`,
        configs
      );
      const parsedGuest = await deletedGuest.json();
      // if id of deleted and the id in array matches, remove
      const updatedGuests = guests.filter(
        (guest) => guest._id !== parsedGuest._id
      );
      setGuests(updatedGuests);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("working");
    getGuests();
    console.log(guests);
  }, []);

  const checkRow = () => {
    if (guests.length > 0) {
      console.log(guests.length);
      return guests.map((guest) => (
        <tr>
          <td>{guest.name}</td>
          <td>{guest.email}</td>
          <td>{guest.phone}</td>
          <td>
            <a href={`/business/${props.id}/notify`}>Notify!</a>
          </td>
          <td onClick={() => deleteGuest(guest._id)}>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
      ));
    } else {
      return (
        <tr className="mt-3 mb-3">
          <td></td>
          <td></td>
          <td>No guests added yet...</td>
          <td></td>
          <td></td>
        </tr>
      );
    }
  };

  return (
    <div className="jm-card">
      <h2 className="jm-th">Guests</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Covid?</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{checkRow()}</tbody>
      </Table>
      <Row>
        <Col></Col>
        <Col>
          <Button
            className="mb-3"
            variant="primary"
            href={`/${props.id}/checkin`}
          >
            Guest Check-in
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};
export default BusinessGuest;
