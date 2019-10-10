import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { autoRehydrate } from 'redux-persist';
import rootReducer from './reducers/index';
import promisemiddleware from 'redux-promise'

const middlewares =[promisemiddleware];

export default createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares), autoRehydrate()),
);