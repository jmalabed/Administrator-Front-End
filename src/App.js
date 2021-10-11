import "./App.css";
import { Route, Link, Switch, withRouter, useHistory } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Business from "./components/Business";
import EmployeeAdd from "./components/EmployeeAdd";
import HotdeskAdd from "./components/HotdeskAdd";
import ConferenceAdd from "./components/ConferenceAdd";

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
          path="/register"
          render={(routerProps) => <Register {...routerProps} />}
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
        <Route path="/" />
      </Switch>
    </div>
  );
}

export default App;
