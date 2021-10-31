import { Navbar, Button, Container } from "react-bootstrap";

const Navigation = (props) => {
  const handleClick = async (id) => {
    try {
      const id = props.id;
      console.log(id);
      const logout = await fetch("https://localhost:9000/auth/logout");
      const parsedLogout = await logout.json();
      props.history.push("/");
    } catch (err) {
      console.log(err);
      props.props.history.push({ pathname: "/" });
    }
  };

  return (
    <div>
      <Container>
        <div className="d-flex flex-col justify-content-end">
          <Button
            onClick={handleClick}
            variant="danger"
            className="mt-3 mb-3 mr-5 ml-5"
          >
            Logout
          </Button>
        </div>
      </Container>
    </div>
  );
};
export default Navigation;
