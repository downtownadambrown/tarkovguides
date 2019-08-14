import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './css/App.css';

import Sample from '../src/components/Sample';
import Login from '../src/components/Login.jsx';
import MapsApp from '../src/components/MapsApp.jsx';
import ModdingApp from '../src/components/ModdingApp';
import KeysApp from '../src/components/KeysApp';
import Home from '../src/components/Home';
import CssBaseline from "@material-ui/core/CssBaseline";
import MainAppBar from "./components/MainAppBar";
import Footer from "./components/Footer";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    content: {
        flex: "1 0 auto",
        marginBottom: 10
    },
}));

function App() {
    const classes = useStyles();

    return (
        <div id="appRouter">
            <div className="appRoot">
                <div className="appContent">
                    <main>
                        <Router>
                            <CssBaseline/>
                            <MainAppBar />
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/maps" component={MapsApp}/>
                                <Route path="/modding" component={ModdingApp}/>
                                <Route path="/keys" component={KeysApp}/>
                                <Route path="/user" component={null}/>
                                <Route component={Home}/>
                            </Switch>
                        </Router>
                    </main>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;


