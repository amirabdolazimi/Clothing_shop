import { Link } from "react-router-dom";
import AboutSection from "../AboutSection/AboutSection";
import FirstBuyCard from "../FirstBuyCard/FirstBuyCard";
import Product from "../Product/Product";
import { useEffect } from "react";
import { getAsyncProducts } from "../../Features/Products/ProductSlice";
import { useSelector, useDispatch } from "react-redux";
const PopularProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncProducts());
  }, [dispatch]);

  // to selecting as popluar products
  const { products } = useSelector((product) => product.products);
  const computerEquipments = products.filter(
    (product) => product.category === "electronics"
  );
  return (
    <div className="px-12 py-7">
      <div className="justify-between flex flex-col border-b pb-7 border-slate-400 mb-8">
        <h4 className="mb-4 text-2xl font-bold">محبوب ترین محصولات</h4>
        <h5 className="font-semibold text-xl text-orange-500">
          <Link
            to={{ pathname: "/product-list/computerEquipment" }}
            state={computerEquipments}
          >
            مشاهده همه محصولات
          </Link>
        </h5>
      </div>
      <div className="items-center justify-center flex flex-col">
        {computerEquipments.map((product) => (
          <Product
            key={product.id}
            name={product.title}
            title={product.description}
            img={product.image}
            price={product.price}
          />
        ))}
      </div>
      <AboutSection />
      <FirstBuyCard />
    </div>
  );
};

export default PopularProducts;
