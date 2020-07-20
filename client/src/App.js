import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <li>
        <Link to="/login"> Login </Link>}
        </li>
        <li>
        <Link to="/protected"> BubblePage </Link>}
        </li>
        <li>
        <Link to="/contact"> Contact:console.warn(); </Link>}
        </li>
       <Switch>
        <Route  path="/login" component={Login} />
        <PrivateRoute  exact path="/protected" component={BubblePage} />
        <Route  path="/contact" component={BubblePage} />
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
