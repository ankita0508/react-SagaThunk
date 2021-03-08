import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root-reducer";
import createSagaMiddleware from "redux-saga";
import { incrementCnt } from "../store/middlewares/saga";
import thunk from "redux-thunk";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare, thunk));

sagaMiddleWare.run(incrementCnt);

export default store;
