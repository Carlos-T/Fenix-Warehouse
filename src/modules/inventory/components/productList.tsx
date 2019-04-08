import React from 'react';
import { Link, Route } from 'react-router-dom';

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
      {this.renderSubroutes()}
    </div>;
  }

  private renderSubroutes(): React.ReactNode {
    return this.subroutes.map((route: any, i: any) => (<Route key={i} path={route.path} render={props => (
      <route.component {...props} routes={route.routes} />)} />
    ));
  }
}