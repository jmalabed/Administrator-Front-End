import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Business from "./components/pages/Business";
import EmployeeAdd from "./components/pages/EmployeeAdd";
import HotdeskAdd from "./components/pages/HotdeskAdd";
import ConferenceAdd from "./components/pages/ConferenceAdd";
import Login from "./components/pages/Login";
import Checkin from "./components/pages/Checkin";
import CheckinDetail from "./components/pages/CheckinDetail";
import Notify from "./components/pages/Notify";
import Footer from "./components/Footer";
import Default from "./components/pages/Default";
import CheckinQr from "./components/pages/CheckinQr";

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="justify-content-center header-container">
        <div className="flex-col">
          <div className="d-flex justify-content-center ">
            <h1 id="title">THE ADMINISTRATOR</h1>
          </div>
        </div>
      </Navbar>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <Home {...routerProps} />}
        />
        <Route
          exact
          path="/business/:id/notify"
          render={(routerProps) => <Notify {...routerProps} />}
        />
        <Route
          exact
          path="/:id/checkin"
          render={(routerProps) => <Checkin {...routerProps} />}
        />
        <Route
          exact
          path="/:bId/checkinQr/:eId/:gId"
          render={(routerProps) => <CheckinQr {...routerProps} />}
        />
        <Route
          exact
          path="/:bId/checkin/:eId/:gId"
          render={(routerProps) => <CheckinDetail {...routerProps} />}
        />
        <Route
          exact
          path="/register"
          render={(routerProps) => <Register {...routerProps} />}
        />
        <Route
          exact
          path="/login"
          render={(routerProps) => <Login {...routerProps} />}
        />
        <Route
          exact
          path="/business/:id"
          render={(routerProps) => <Business {...routerProps} />}
        />
        <Route
          exact
          path="/business/:id/employee/add"
          render={(routerProps) => <EmployeeAdd {...routerProps} />}
        />
        <Route
          exact
          path="/business/:id/hotdesk/add"
          render={(routerProps) => <HotdeskAdd {...routerProps} />}
        />
        <Route
          exact
          path="/business/:id/conference/add"
          render={(routerProps) => <ConferenceAdd {...routerProps} />}
        />
        <Route
          path="/"
          render={(routerProps) => <Default {...routerProps} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
