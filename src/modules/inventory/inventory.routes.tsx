import acidRoute from "../../types/acidRoute";
import ProductList from "./components/productList";
import ProductDetail from "./components/productDetail";

const routes: acidRoute = {
  path: "/",
  component: ProductList,
  routes: [
    {
      path: "/products/:id",
      component: ProductDetail,
    }
  ]
};

export default routes;