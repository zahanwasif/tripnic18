import { createStore, applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers/reducers";


const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

export {store};