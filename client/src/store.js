import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

const composedEnhancers = composeWithDevTools(applyMiddleware(reduxThunk));

export default createStore(reducers, composedEnhancers);
