import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Login extends Component { // eslint-disable-next-line
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="App">
                <h1>Login</h1>
            </div>
        );
    }
}

export default withRouter(Login);
