import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";

import reducer from "./reducer";
import history from "../history";

const enhancer = applyMiddleware(
  thunk,
  routerMiddleware(history),
);

export default createStore(reducer, composeWithDevTools(enhancer));
