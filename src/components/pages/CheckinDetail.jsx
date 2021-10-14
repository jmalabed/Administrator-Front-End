import { useState, useEffect } from "react";

const CheckinDetail = (props) => {
  const [employee, setEmployee] = useState();
  const [guest, setGuest] = useState();
  const [desk, setDesk] = useState();

  const getEmployee = async (id) => {
    try {
      const employee = await fetch("http://localhost:9000/person/" + id);
      const parsedEmployee = await employee.json();
      console.log(parsedEmployee);
      setEmployee(parsedEmployee);
    } catch (err) {
      console.log(err);
    }
  };

  const getGuest = async (id) => {
    try {
      const guest = await fetch("http://localhost:9000/person/" + id);
      const parsedGuest = await guest.json();
      console.log(parsedGuest);
      setGuest(parsedGuest);
    } catch (err) {
      console.log(err);
    }
  };

  const getDesk = async () => {};

  useEffect(() => {
    getEmployee(props.match.params.pId);
  }, []);

  const greeting = () => {
    return <p>{employee.name} will greet you when they have a moment.</p>;
  };

  return (
    <>
      <div>
        <div>
          <h2>Thank you for checking in.</h2>
          {greeting()}

          <p>Please make yourself at home at HOTDESKX.</p>
          <p>
            Your meeting is scheduled to be in CONFERENCEROOMX. It will be
            reserved for the next hour.
          </p>
          <p>
            Report a positive covid case at this{" "}
            <a href="/NOT FILLED YET">link</a>.
          </p>
        </div>
      </div>
    </>
  );
};
export default CheckinDetail;
