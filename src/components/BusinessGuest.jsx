import { Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";

const BusinessGuest = (props) => {
  const [guests, setGuests] = useState([]);

  const getGuests = async () => {
    try {
      const guests = await fetch("http://localhost:9000/person");
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
        `http://localhost:9000/person/${id}`,
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

  const tableRow = guests.map((guest) => (
    <tr>
      <td>{guest.name}</td>
      <td>{guest.email}</td>
      <td>{guest.phone}</td>
      <td>
        <a href={`/business/${props.id}/notify`}>Notify!</a>
      </td>
      <td onClick={() => deleteGuest(guest._id)}>delete</td>
    </tr>
  ));

  return (
    <>
      <h2>Guests</h2>
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
        <tbody>{tableRow}</tbody>
      </Table>
    </>
  );
};
export default BusinessGuest;
