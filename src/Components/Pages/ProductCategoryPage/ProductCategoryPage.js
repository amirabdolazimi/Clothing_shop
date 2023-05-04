import { useLocation } from "react-router-dom";
import Product from "../../Product/Product";

// to Return products based on their categories
const ProductCategoryPage = () => {
  const { state } = useLocation();

  return (
    <div className="items-center justify-center flex flex-col">
      {state.map((product) => (
        <Product
          key={product.id}
          name={product.title}
          title={product.description}
          img={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductCategoryPage;
