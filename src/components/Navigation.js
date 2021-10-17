import { Navbar } from "react-bootstrap";

const Navigation = (props) => {
  console.log("how to get params", props.id);

  const logInNOut = () => {
    if (props) {
      return (
        <p>
          <a href="/logout">Logout</a>
        </p>
      );
    } else {
      return (
        <p>
          <a href="/login">Login</a>
        </p>
      );
    }
  };

  return (
    <div>
      <div expand="lg" className="justify-content-center w-100">
        <div className="d-flex flex-col justify-content-around">
          {/*<p>
            <a href="/">About</a>
          </p>
          <p>
            <a href="/business/id">Return to Business</a>
          </p>*/}
          {logInNOut()}
          {/*<p>
            <a href="/register">Sign Up</a>
          </p>*/}
        </div>
      </div>
    </div>
  );
};
export default Navigation;
