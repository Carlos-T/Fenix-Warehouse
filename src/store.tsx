import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
export default function configureStore(rootReducer: any, initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}