import { useLocation } from "react-router-dom";
import Product from "../../Product/Product";
// to Return products based on their categories
const ProductCategoryPage = () => {
  const { state } = useLocation();
  return (
    <div className="justify-items-center px-4 grid grid-cols-1 md:grid-cols-2 md:justify-between lg:grid-cols-3 lg:gap-cols-1">
      {state?.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductCategoryPage;
