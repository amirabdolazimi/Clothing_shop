import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAsyncProducts } from "../../Features/Products/ProductSlice";
import { useSplitProducts } from "../../utils/useSplitProducts";
const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncProducts());
  }, [dispatch]);
  const { products } = useSelector((product) => product.products);
  // to Spliting products
  const jewlries = useSplitProducts(products, "jewelery");
  const computerEquipments = useSplitProducts(products, "electronics");
  const manDress = useSplitProducts(products, "men's clothing");
  const womenDress = useSplitProducts(products, "women's clothing");

  // to organizing NavLink props
  const navs = [
    {
      path: "/product-list/jewlries",
      state: jewlries,
      title: "جواهرات",
    },
    {
      path: "/product-list/womenDress",
      state: womenDress,
      title: "لباس زنانه",
    },
    {
      path: "/product-list/manDress",
      state: manDress,
      title: "لباس مردانه",
    },
    {
      path: "/product-list/computerEquipment",
      state: computerEquipments,
      title: "تجهیزات هوشمند",
    },
  ];
  return (
    <div className="px-4 my-8">
      <div className="w-full flex flex-wrap justify-between md:w-3/4 md:mx-auto lg:w-2/3 lg:mx-auto">
        {navs.map((link) => (
          <NavLink
            className={(navData) =>
              navData.isActive ? "bg-orange-300 rounded" : null
            }
            style={{ margin: "12px 0px" }}
            key={link.path}
            to={link.path}
            state={link.state}
          >
            <div className="p-2 shadow lg:shadow-lg text-center text-sm font-semibold border-2 border-orange-300 rounded md:text-base lg:text-lg lg:p-3 lg:font-bold">
              {link.title}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
