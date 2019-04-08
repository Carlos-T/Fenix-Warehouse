import { combineReducers } from 'redux';

const buildRootReducer = (reducers: any[]) => {
  const r = reducers.reduce((p, c) => {
    c[p.name] = p;
    return c;
  }, {});
  return combineReducers({
    r
  })
}

export default buildRootReducer;