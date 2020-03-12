import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import persistState from 'redux-sessionstorage'
import rootReducer from "./reducer";

const initialState = {};
const middleware = [thunk];
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  persistState()
);

export default createStore(rootReducer,initialState, composedEnhancers);
