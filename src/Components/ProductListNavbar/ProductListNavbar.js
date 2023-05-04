import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAsyncProducts } from "../../Features/Products/ProductSlice";
import { useSplitProducts } from "../../CustomHooks/useSplitProducts";
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
    <div className="px-12 my-10">
      <div className="w-full flex justify-between">
        {navs.map((link) => (
          <NavLink
            className={(navData) =>
              navData.isActive ? "bg-orange-300 rounded" : null
            }
            key={link.path}
            to={link.path}
            state={link.state}
          >
            <div className="py-2 px-3 border-2 border-orange-300 rounded">
              {link.title}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
