import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";

import rootReducer from "src/redux/rootReducer";

const composedEnhancers = composeWithDevTools(applyMiddleware(reduxThunk));

export default createStore(rootReducer, composedEnhancers);
