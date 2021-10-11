import { Button, Table } from "react-bootstrap";
const BusinessEmployee = (props) => {
  return (
    <>
      <h2>Employees</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>name</td>
            <td>email</td>
            <td>edit</td>
            <td>delete</td>
          </tr>
        </tbody>
      </Table>

      <Button variant="success" href={`${props.id}/employee/add`}>
        Add Employee
      </Button>
    </>
  );
};
export default BusinessEmployee;
