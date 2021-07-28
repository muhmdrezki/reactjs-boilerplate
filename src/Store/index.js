import { combineReducers } from "redux";

// Import all reducers here
import counterReducer from "./reducers/counter";

// Combine them all here
const combinedReducers = combineReducers({
  counter: counterReducer,
});

export default combinedReducers;
