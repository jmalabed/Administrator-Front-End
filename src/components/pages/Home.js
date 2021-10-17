import { Container } from "react-bootstrap";

const Home = (props) => {
  return (
    <div>
      <div>
        <Container>
          <h2 className="mt-3">
            The guest administration software of the future.
          </h2>
          <br />

          <div id="about">
            <h4 className="mt-3 mb-5">
              The office culture is an all in one office space management,
              administrative, and COVID notification software.
            </h4>
            <hr className="" />
            <p className="mt-5">
              <b>
                Safety and awareness of COVID is something that has not yet been
                seamlessly integrated into office guest management software. The
                Office Culture bridges this gap by assigning available desks and
                conference rooms to the necessary people while logging
                attendance. Information of a positive COVID test is quickly and
                transparently distributed to the necessary people to minimize
                delay and maximize the safety of staff and guests.
              </b>
            </p>

            <h3 className="mb-2 mt-5">
              <a href="/register">Sign up to try it out!</a>
            </h3>
            <p>Already have an account?</p>
            <a href="/login">Sign in</a>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
