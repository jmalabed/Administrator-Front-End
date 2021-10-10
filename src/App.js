import "./App.css";
import { Route, Link, Switch, withRouter, useHistory } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Business from "./components/Business";

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
      </Switch>
    </div>
  );
}

export default App;
