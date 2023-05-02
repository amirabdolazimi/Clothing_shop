import { useLocation, useParams } from "react-router-dom";

const ProductCategoryPage = () => {
  const params = useParams();
  const state = useLocation();
  console.log(params, state);

  return <div>h111</div>;
};

export default ProductCategoryPage;
