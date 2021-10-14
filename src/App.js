import "./App.css";
import { Route, Link, Switch, withRouter, useHistory } from "react-router-dom";

import Home from "./components/pages/Home";
import Navigation from "./components/Navigation";
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

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/home"
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
          path="/:id/checkin/:pId"
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
