import { Outlet } from "react-router-dom";
import ProductListNavbar from "../../ProductListNavbar/ProductListNavbar";

const ProductListPage = () => {
  return (
    <>
      <ProductListNavbar />
      <Outlet />
    </>
  );
};

export default ProductListPage;
