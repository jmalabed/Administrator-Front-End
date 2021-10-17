import { Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const BusinessEmployee = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    try {
      const employees = await fetch(
        "https://office-culture.herokuapp.com/person"
      );
      const parsedEmployees = await employees.json();
      console.log(parsedEmployees);
      const filteredEmployees = parsedEmployees.filter(
        (person) => person.isEmployee
      );
      setEmployees(filteredEmployees);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEmployee = async (id) => {
    console.log(id);
    try {
      const configs = {
        method: "DELETE",
      };
      const deletedEmployee = await fetch(
        `https://office-culture.herokuapp.com/person/${id}`,
        configs
      );
      const parsedEmployee = await deletedEmployee.json();
      // if id of deleted and the id in array matches, remove
      const updatedEmployees = employees.filter(
        (employee) => employee._id !== parsedEmployee._id
      );
      setEmployees(updatedEmployees);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log("working");
    getEmployees();
    console.log(employees);
  }, []);

  const checkRow = () => {
    console.log(employees);
    if (employees.length > 0) {
      return employees.map((employee) => (
        <tr>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.phone}</td>
          <td>
            <a href={`/business/${props.id}/notify`}>Notify!</a>
          </td>
          <td onClick={() => deleteEmployee(employee._id)}>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
      ));
    } else {
      return (
        <tr>
          <td></td>
          <td></td>
          <td>No employees added yet...</td>
          <td></td>
          <td></td>
        </tr>
      );
    }
  };

  return (
    <div>
      <div className="jm-card">
        <h2 className="jm-th">Employees</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
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
              variant="success"
              href={`${props.id}/employee/add`}
            >
              Add Employee
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
};
export default BusinessEmployee;
