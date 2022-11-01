import { combineReducers } from "redux";
import transactions from "./transactions";
import auth from "./auth";

export default combineReducers({
  transactions,
  auth
});
