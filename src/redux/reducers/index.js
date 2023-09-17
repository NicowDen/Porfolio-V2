import { combineReducers } from "redux";
import windowSizeReducer from "./windowSize";
import scrollReducer from "./scroll";
import rubricsReducer from "./rubrics";

const finalReducer = combineReducers({
  windowSizeReducer,
  scrollReducer,
  rubricsReducer,
});

export default finalReducer;
