import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { ThemeProvider } from '@material-ui/styles';
import theme from "./theme/theme.js";

import App from './App';
import './css/index.css';
import 'typeface-roboto';

import configureStore from "./store/configureStore";
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
