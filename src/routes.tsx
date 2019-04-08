import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export function RouteConfig(props: any) {
  const routes = props.routes;
  return (
    <BrowserRouter>
      {routes.map((route: any, i: number) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </BrowserRouter>
  );
}

export default RouteConfig;
