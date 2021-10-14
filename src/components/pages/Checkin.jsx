import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import CheckedIn from "../CheckedIn";
import ReactDOM from "react-dom";
import CheckinDetail from "./CheckinDetail";

const Checkin = (props) => {
  const initialInput = {
    name: "",
    email: "",
    phone: "",
    isEmployee: false,
    isInfected: false,
    business: props.match.params.id,
    dateVisited: new Date().toLocaleDateString(),
  };
  const [input, setInput] = useState(initialInput);
  const [employees, setEmployees] = useState([]);
  const [visiting, setVisiting] = useState("");
  const [guest, setGuest] = useState({});

  const getEmployees = async () => {
    try {
      const employees = await fetch("http://localhost:9000/person");
      const parsedEmployees = await employees.json();
      console.log(parsedEmployees);
      const filteredBusiness = parsedEmployees.filter(
        (employee) => (employee.business = props.match.params.id)
      );
      const filteredEmployees = filteredBusiness.filter(
        (person) => person.isEmployee
      );
      setEmployees(filteredEmployees);
    } catch (err) {
      console.log(err);
    }
  };

  const handleVisitor = (e) => {
    setVisiting(e.target.value);
    console.log(visiting);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // setVisiting(e.target.visiting);
    console.log(e.target.visiting);
    console.log(input);
  };

  const makeGuest = async () => {
    try {
      const visitor = { ...input, visiting };
      console.log(visitor);
      const configs = {
        body: JSON.stringify(visitor),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const newPerson = await fetch("http://localhost:9000/person", configs);
      const parsedPerson = await newPerson.json();
      console.log(parsedPerson);
      setGuest(parsedPerson);
    } catch (err) {
      console.log(err);
    } finally {
      if (guest._id) {
        props.history.push(`/${guest.business}/checkin/${guest.visiting}`);
      } else {
        alert("Unable to create user. Please try again.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hitting");
    console.log();
    makeGuest();
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
        <label htmlFor="phone">Phone:</label>
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="visiting">I am here for:</label>
        <select name="visiting" id="visiting" onChange={handleVisitor}>
          <option value="">Select one...</option>
          {employee}
        </select>
        <br />
        <input type="submit" value="Sign in" />
      </form>
    </>
  );
};

export default Checkin;
