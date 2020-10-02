import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { fetchPicture } from "./redux/actions/index.js";
import './index.css';

import App from './App';

import history from "./history";
import store from "./redux/store";

store.dispatch(fetchPicture());

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

