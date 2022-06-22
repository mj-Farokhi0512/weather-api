import { createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";
import reducer from "./weather/reducer";

// const store = createStore(reducer, applyMiddleware(Thunk));
const store = createStore(reducer, compose(applyMiddleware(Thunk)));

export default store;
