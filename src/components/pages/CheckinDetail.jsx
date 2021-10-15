import { useState, useEffect } from "react";
import Moment from "react-moment";
import moment from "moment";

const CheckinDetail = (props) => {
  const [employee, setEmployee] = useState();
  const [guest, setGuest] = useState();
  const [desk, setDesk] = useState({});
  const [time, setTime] = useState(moment());
  const [endTime, setEndTime] = useState(moment().add(1, "h"));

  const getEmployee = async (id) => {
    try {
      const employee = await fetch(
        "https://git.heroku.com/office-culture.git/person/" + id
      );
      const parsedEmployee = await employee.json();

      setEmployee(parsedEmployee);
    } catch (err) {
      console.log(err);
    }
  };

  const getGuest = async (id) => {
    try {
      const guest = await fetch(
        "https://git.heroku.com/office-culture.git/person/" + id
      );
      const parsedGuest = await guest.json();
      console.log(parsedGuest.dateVisited);
      setGuest(parsedGuest);
    } catch (err) {
      console.log(err);
    }
  };

  //get first available desk in list
  const getDesk = async () => {
    try {
      const allDesks = await fetch(
        `https://git.heroku.com/office-culture.git/hotdesk`
      );
      const parsedDesks = await allDesks.json();

      if (parsedDesks.length >= 1) {
        const filteredDesks = parsedDesks.filter((desk) => !desk.isOccupied);
        console.log(filteredDesks);
        const firstItem = filteredDesks[0];
        setDesk(firstItem);
      } else {
        console.log("no desks have been set up by the administration yet.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // update hotdesk to show as occupied

  const updatedDesk = async (id) => {
    const { business, name, timeOccupied } = desk;
    const update = {
      timeOccupied: time,
      isOccupied: true,
    };

    try {
      const configs = {
        method: "PUT",
        body: JSON.stringify(update),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const updateDesk = await fetch(
        `https://git.heroku.com/office-culture.git/hotdesk/${id}`,
        configs
      );
      const parsedDesk = await updateDesk.json();
      console.log("updated desk", parsedDesk);
      setDesk(parsedDesk);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEmployee(props.match.params.eId);
    getDesk();
    getGuest(props.match.params.gId);
  }, []);

  useEffect(() => {
    console.log("which one ", desk);
    updatedDesk(desk._id);
  }, [desk._id]);

  const hotdeskName = () => {
    if (desk) {
      console.log(desk.timeOccupied);
      return (
        <>
          <h3>{desk.name}</h3>

          <p>
            It is now {time.format("hh:mm")}, it will be reserved until{" "}
            {endTime.format("hh:mm")}.
          </p>
        </>
      );
    }
  };

  const hostName = () => {
    if (employee) {
      return <>{employee.name}</>;
    }
  };

  return (
    <>
      <div>
        <div>
          <h2>Thank you for checking in.</h2>
          <p>{hostName()} will greet you when they have a moment.</p>
          <p>Please make yourself at home at Hot Desk: {hotdeskName()}</p>
          {/*<p>
            Your meeting is scheduled to be in CONFERENCEROOMX. It will be
            reserved for the next hour.
          </p>*/}
          <p>
            Report a positive covid case at this{" "}
            <a href={`/business/${props.match.params.bId}/notify`}>link</a>.
          </p>
        </div>
      </div>
    </>
  );
};
export default CheckinDetail;
