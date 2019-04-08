export default interface acidRoute {
  path: string;
  component: any;
  routes?: acidRoute[];
}