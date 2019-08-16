import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
// eslint-disable-next-line import/extensions
import theme from './theme/theme.js';

import App from './App';
import './css/index.css';
import 'typeface-roboto';
import * as Sentry from '@sentry/browser';
import configureStore from './store/configureStore';

Sentry.init({ dsn: "https://f196c7d628df4154ab2d434f8216ed80@sentry.io/1532258" });
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
