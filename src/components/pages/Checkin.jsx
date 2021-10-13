import { useState, useEffect } from "react";
import React from "react";
import CheckedIn from "../CheckedIn";
import ReactDOM from "react-dom";

const modal = () => {
  return ReactDOM.createPortal(
    <>
      <div id="greet">
        <div class="modal" id="close">
          <h2>Thank you for checking in.</h2>

          <p>
            Employee name will greet you when they are ready. Your hotdesk
            assignment and meeting details have been sent to your email.
          </p>
        </div>
      </div>
    </>,
    document.getElementById("test")
  );
};

const Checkin = (props) => {
  const initialInput = {
    name: "",
    email: "",
    isEmployee: true,
    isInfected: false,
    business: props.match.params.id,
  };
  const [input, setInput] = useState(initialInput);
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    try {
      const employees = await fetch("http://localhost:9000/person");
      const parsedEmployees = await employees.json();
      console.log(parsedEmployees);
      const filteredEmployees = parsedEmployees.filter(
        (employee) => (employee.business = props.match.params.id)
      );
      console.log(filteredEmployees);
      setEmployees(filteredEmployees);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hitting");
    return <CheckedIn />;
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const employee = employees.map((employee) => (
    <option value={employee._id}>{employee.name}</option>
  ));

  return (
    <>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        ></input>
        <br></br>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        ></input>{" "}
        <br />
        <label htmlFor="visiting">I am here for:</label>
        <select name="visiting" id="visiting">
          {employee}
        </select>
        <br />
        <input type="submit" value="Sign in" />
      </form>
      {modal()}
    </>
  );
};

export default Checkin;
