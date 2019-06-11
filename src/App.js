import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './css/App.css';

import Sample from '../src/components/Sample';
import Login from '../src/components/Login.jsx';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={Sample}/>
              <Route path="/login" component={Login}/>
              <Route path="/user" component={null}/>
              <Route component={Sample}/>
          </Switch>
      </Router>
  );
}

export default App;


