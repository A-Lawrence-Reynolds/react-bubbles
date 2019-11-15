import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/Login">Login</Link>
          <Link to="/protected">To the bubbles</Link>
        </div>
        <Switch>
          <PrivateRoute path="/protected" component={BubblePage} />
          <Route exact path="/" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
