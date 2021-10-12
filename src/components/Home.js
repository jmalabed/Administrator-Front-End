import { Navbar } from "react-bootstrap";
const Home = (props) => {
  return (
    <div>
      <div expand="lg" className="justify-content-center w-100">
        <div
          className="d-flex flex-col justify-content-around"
          style={{ background: "linear-gradient(#f8f9fa,lavender)" }}
        >
          <p>
            <a href="/home">About</a>
          </p>
          <p>
            <a href="/login">Login</a>
          </p>
          <p>
            <a href="/register">Sign Up</a>
          </p>
        </div>
      </div>
      <div style={{ "background-color": "lavender" }}>
        <h2>The guest administration software of the future.</h2>
        <br />
        <h2>About</h2>
        <p>
          The office culture is an all in one office space management,
          administrative, and COVID notification software. Managing fluid office
          environments with hotdesk, conferencing, and COVID notification
          solutions.
        </p>
        <p>
          Safety and awareness of COVID is something that has not yet been
          seamlessly integrated into office guest management software. The
          Office Culture bridges this gap by assigning available desks and
          conference rooms to the necessary people while logging attendance.
          Information of a positive COVID test is quickly and transparently
          distributed to the necessary people to minimize delay and maximize the
          safety of staff and guests.
        </p>
        <br />
        <br />
        <br />
        <h3>
          <a href="/register">Sign up to try it out!</a>
        </h3>
      </div>
    </div>
  );
};

export default Home;
