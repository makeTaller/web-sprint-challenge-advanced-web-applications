import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute"

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import ContactPage from "./components/ContactPage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <li>
        <Link to="/login"> Login </Link>
        </li>
        <li>
        <Link to="/protected"> BubblePage </Link>
        </li>
        <li>
        <Link to="/contact"> Contact Us</Link>
        </li>
       <Switch>
        <Route  path="/login" component={Login} />
        <PrivateRoute  exact path="/protected" component={BubblePage} />
        <Route  path="/contact" component={ContactPage} />
        </Switch> 
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
