import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RouteConfig from './routes';
import buildRootReducer from './rootReducer';

import appModules from './modules';

const appRoutes = appModules.map(i => i.routes);
const appReducers = appModules.map(i => i.reducers);

const rootReducer = buildRootReducer(appReducers);

ReactDOM.render(
  <Provider store={configureStore(rootReducer)}>
    <RouteConfig routes={appRoutes}></RouteConfig>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
