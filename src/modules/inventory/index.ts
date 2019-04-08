import routes from './inventory.routes';
import { simpleAction, anotherSimpleAction } from './fsm/actions';
import reducers from './fsm/reducers';
import acidModule from '../../types/acidModule';

const inventoryModule: acidModule = {
  routes,
  reducers,
  actions: {
    simpleAction,
    anotherSimpleAction
  }
};

export default inventoryModule;