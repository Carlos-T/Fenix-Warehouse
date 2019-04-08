import acidRoute from './acidRoute';

export default interface acidModule {
  routes?: acidRoute,
  actions?: any,
  reducers?: (state: {} | undefined, action: any) => {}
}