import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Login from './components/Login';
import MapsApp from './components/MapsApp';
import ModdingApp from './components/ModdingApp';
import KeysApp from './components/KeysApp';
import Home from './components/Home';
import MainAppBar from './components/MainAppBar';
import Footer from './components/Footer';

function App() {
  return (
    <div id="appRouter">
      <div className="appRoot">
        <div className="appContent">
          <main>
            <Router>
              <CssBaseline />
              <MainAppBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/maps" component={MapsApp} />
                <Route path="/modding" component={ModdingApp} />
                <Route path="/keys" component={KeysApp} />
                <Route path="/user" component={null} />
                <Route component={Home} />
              </Switch>
            </Router>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
