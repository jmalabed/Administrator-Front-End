import { Button, Table, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import TableRow from "./TableRow";
import moment from "moment";

const BusinessHotdesk = (props) => {
  const [desks, setDesks] = useState([]);
  const [input, setInput] = useState();

  const getDesks = async () => {
    try {
      const allDesks = await fetch(
        "https://office-culture.herokuapp.com/hotdesk/"
      );
      const parsedDesks = await allDesks.json();
      const bisDesks = parsedDesks.filter((desk) => desk.business === props.id);
      console.log(parsedDesks);
      const checkedDesks = bisDesks.map((desk) =>
        moment(desk.timeOccupied).isBefore(moment().subtract(1, "hours"))
          ? { ...desk, timeOccupied: null, isOccupied: false }
          : desk
      );
      console.log(checkedDesks);
      setDesks(checkedDesks);
    } catch (err) {
      console.log(err);
    } finally {
      desks.map((desk) => updateDesks(desk));
    }
  };

  const updateDesks = async (desk) => {
    try {
      const cofigs = {
        method: "PUT",
        body: JSON.stringify({ isOccupied: desk.isOccupied }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const updateDesk = await fetch(
        "https://office-culture.herokuapp.com/hotdesk/" + desk._id
      );
      const parsedDesk = await updateDesk.json();
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

  const checkRow = () => {
    console.log(desks);
    if (desks.length > 0) {
      return desks.map((desk) => (
        <TableRow desk={desk} deleteDesk={deleteDesk} />
      ));
    } else {
      return (
        <tr>
          <td></td>
          <td>No workstations added yet...</td>
          <td></td>
          <td></td>
        </tr>
      );
    }
  };

  useEffect(() => {
    getDesks();
  }, []);

  return (
    <div className="jm-card">
      <h2 className="jm-th">Hotdesk</h2>
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
          <tbody>{checkRow()}</tbody>
        </Table>
      </div>
      <Row>
        <Col></Col>
        <Col>
          <Button className="mb-3" variant="success" onClick={() => makeDesk()}>
            Add Hotdesk
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};
export default BusinessHotdesk;
