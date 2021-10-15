import { Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import TableRow from "./TableRow";

const BusinessHotdesk = (props) => {
  const [desks, setDesks] = useState([]);
  const [input, setInput] = useState();

  const getDesks = async () => {
    try {
      const allDesks = await fetch(
        "https://office-culture.herokuapp.com/hotdesk/"
      );
      const parsedDesks = await allDesks.json();
      console.log(parsedDesks);
      setDesks(parsedDesks);
    } catch (err) {
      console.log(err);
    }
  };

  const makeDesk = async () => {
    try {
      const typDesk = {
        name: "add name",
        business: props.id,
        isOccupied: false,
        timeOccupied: "",
      };
      const configs = {
        body: JSON.stringify(typDesk),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const newDesk = await fetch(
        "https://office-culture.herokuapp.com/hotdesk",
        configs
      );
      const parsedDesk = await newDesk.json();

      setDesks([...desks, parsedDesk]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteDesk = async (id) => {
    try {
      const configs = {
        method: "DELETE",
      };
      const deletedDesk = await fetch(
        `https://office-culture.herokuapp.com/hotdesk/${id}`,
        configs
      );
      const parsedDesk = await deletedDesk.json();

      const updatedDesks = desks.filter((desk) => desk._id !== parsedDesk._id);

      setDesks(updatedDesks);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    console.log("click");
  };

  const tableRows = desks.map((desk) => (
    <TableRow desk={desk} deleteDesk={deleteDesk} />
  ));

  useEffect(() => {
    getDesks();
  }, []);

  return (
    <>
      <h2>Hotdesk</h2>
      <div id="hotDeskTable">
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Occupied</th>
              <th>Time occupied</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </Table>
      </div>
      <Button variant="success" onClick={() => makeDesk()}>
        Add Hotdesk
      </Button>
    </>
  );
};
export default BusinessHotdesk;
