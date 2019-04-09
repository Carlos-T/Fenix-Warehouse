import { combineReducers } from 'redux';

const buildRootReducer = (reducers: any[]) => {
  return combineReducers(reducers.reduce((p, c) => {
    p[c.name] = c;
    return p;
  }, {}))
}

export default buildRootReducer;