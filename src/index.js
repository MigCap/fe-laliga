import React from 'react';
import ReactDOM from 'react-dom';

import { ConnectedRouter } from 'connected-react-router';

import { Provider } from 'react-redux';
import configureStore from 'redux/storeConfig';

import history from 'utils/appConfigUtils/history';

import App from './app/App';

import 'styles/main.scss';

import * as serviceWorker from './app/serviceWorker';

const initialState = {};
const store = configureStore(initialState, history);

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  // </React.StrictMode>,
  MOUNT_NODE,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
