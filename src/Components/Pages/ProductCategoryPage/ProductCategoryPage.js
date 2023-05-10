import { useLocation } from "react-router-dom";
import Product from "../../Product/Product";
// to Return products based on their categories
const ProductCategoryPage = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="items-center justify-center flex flex-col">
      {state.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductCategoryPage;
