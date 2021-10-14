import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk';
import { reducers } from "./Reducers";

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))
store.window = store;