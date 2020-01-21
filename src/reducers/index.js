//internal dependencies
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

//external dependencies
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
});

export default rootReducer;
