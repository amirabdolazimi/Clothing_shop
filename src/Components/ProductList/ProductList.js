import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAsyncProducts } from "../../Features/Products/ProductSlice";
const ProductList = () => {
  // const data = useSelector((product) => product.products);
  // console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncProducts());
  }, []);

  const { products } = useSelector((product) => product.products);
  console.log(products);
  const jewlries = products.Jewlries;
  const manDress = products.manDress;
  const womenDress = products.womenDress;
  const computerEquipments = products.computerEquipments;
  console.log(jewlries, manDress, womenDress);

  return (
    <div className="px-12 my-10">
      <div className="w-full flex justify-between">
        <NavLink
          to="/product-list/jewlries"
          state={jewlries}
          className={(navData) =>
            navData.isActive ? "bg-orange-300 rounded" : null
          }
        >
          <div className="py-2 px-3 border-2 border-orange-300 rounded">
            جواهرات
          </div>
        </NavLink>
        <NavLink
          to="/product-list/womenDress"
          state={womenDress}
          className={(navData) =>
            navData.isActive ? "bg-orange-300 rounded" : null
          }
        >
          <div className="py-2 px-3 border-2 border-orange-300 rounded">
            لباس زنانه
          </div>
        </NavLink>
        <NavLink
          to="/product-list/manDress"
          state={manDress}
          className={(navData) =>
            navData.isActive ? "bg-orange-300 rounded" : null
          }
        >
          <div className="py-2 px-3 border-2 border-orange-300 rounded">
            لباس مردانه
          </div>
        </NavLink>
        <NavLink
          to={{ pathname: "/product-list/computerEquipments" }}
          state={computerEquipments}
          className={(navData) =>
            navData.isActive ? "bg-orange-300 rounded" : null
          }
        >
          <div className="py-2 px-3 border-2 border-orange-300 rounded">
            تجهیزات هوشمند
          </div>
        </NavLink>
      </div>
      <div></div>
    </div>
  );
};

export default ProductList;
