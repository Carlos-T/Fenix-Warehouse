import React from 'react';
import { Link, Route } from 'react-router-dom';
import { RouteWithSubRoutes } from '../../../routes';

export default class productList extends React.Component {
  private subroutes: any;

  constructor(props: any) {
    super(props);
    this.subroutes = props.routes;
  }

  render() {
    return <div>
      Product list
      <ul>
        <li>
          <Link to="/products/asdf">Bus</Link>
        </li>
        <li>
          <Link to="/products/zxcv">Cart</Link>
        </li>
      </ul>
      {
        this.subroutes.map((route: any, i: any) => (
          <RouteWithSubRoutes key={i} {...route}></RouteWithSubRoutes>)
        )
      }
    </div>;
  }
}