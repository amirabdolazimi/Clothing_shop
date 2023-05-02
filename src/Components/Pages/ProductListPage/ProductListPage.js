import { Outlet } from "react-router-dom";
import ProductList from "../../ProductList/ProductList";

const ProductListPage = () => {
  return (
    <>
      <ProductList />
      <Outlet />
    </>
  );
};

export default ProductListPage;
