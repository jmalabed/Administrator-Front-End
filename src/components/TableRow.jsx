import { useState, useEffect } from "react";
import EditPortal from "./EditPortal";
import { Button } from "react-bootstrap";
import moment from "moment";

const TableRow = (props) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();
  const [desk, setDesk] = useState(props.desk);
  const [update, setUpdate] = useState(false);
  const handleSubmit = () => {
    console.log("clicked");
  };

  const getDesk = async (id) => {
    try {
      const foundDesk = await fetch(
        `https://office-culture.herokuapp.com/hotdesk/${id}`
      );
      const parsedDesk = await foundDesk.json();
      console.log(parsedDesk);
      setDesk(parsedDesk);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDesk(props.desk._id);
    console.log(desk.name);
  }, [update]);

  const time = (date) => {
    if (date) {
      return moment(date).format("hh:mm");
    } else {
      return null;
    }
  };

  console.log(time(props.desk.timeOccupied));

  return (
    <tr key={props.desk._id}>
      <td onClick={() => setOpen(true)}>
        <u>{desk.name}</u>
      </td>

      <EditPortal
        deskId={props.desk._id}
        isOpen={open}
        onClose={() => setOpen(false)}
        input={input}
        setInput={setInput}
        setUpdate={() => setUpdate(!update)}
      />

      <td>{props.desk.isOccupied ? "Yes" : "No"}</td>
      <td>{time(props.desk.timeOccupied)}</td>
      <td onClick={() => props.deleteDesk(props.desk._id)}>
        <Button variant="danger">Delete</Button>
      </td>
    </tr>
  );
};
export default TableRow;
