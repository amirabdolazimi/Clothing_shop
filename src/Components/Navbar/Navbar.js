import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAsyncProducts } from "../../Features/Products/ProductSlice";
import { IoCall, IoCartSharp, IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSplitProducts } from "../../CustomHooks/useSplitProducts";

const Navbar = () => {
  const [menuCondition, setMenuCondition] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncProducts());
  }, [dispatch]);
  const menuConditionHandler = () => {
    setMenuCondition((prevState) => (prevState = !prevState));
  };

  // selecting as popluar products
  const { products } = useSelector((product) => product.products);
  const computerEquipments = useSplitProducts(products, "electronics");

  return (
    <div className="flex flex-col justify-center items-center relative">
      <div
        className="flex flex-col cursor-pointer "
        onClick={menuConditionHandler}
      >
        <span
          className={`bg-orange-500 rounded-xl w-8 my-1 h-1 ${
            !menuCondition && "bg-orange-700"
          } `}
        ></span>
        <span
          className={`bg-orange-500 rounded-xl w-8 my-1 h-1 ${
            !menuCondition && "bg-orange-700"
          } `}
        ></span>
        <span
          className={`bg-orange-500 rounded-xl w-8 my-1 h-1 ${
            !menuCondition && "bg-orange-700"
          } `}
        ></span>
      </div>
      <div
        style={{ right: "-48px" }}
        className={`text-center content-center absolute top-12 z-50 ${
          menuCondition ? "hidden" : "block"
        }`}
      >
        <div onClick={menuConditionHandler}>
          <Link
            to="/"
            className="hover:border-b-4 hover:border-orange-500 text-slate-200 px-6 py-3 flex justify-center items-center w-full bg-slate-900"
          >
            <IoHome className="text-lg" />
            <span className="mr-1 text-lg w-max">خانه</span>
          </Link>
        </div>
        <div onClick={menuConditionHandler}>
          <Link className="hover:border-b-4 hover:border-orange-500 text-slate-200 px-6 py-3 flex justify-center items-center w-full bg-slate-900">
            <IoCall className="text-lg" />
            <span className="mr-1 text-lg w-max">تماس با ما</span>
          </Link>
        </div>
        <div onClick={menuConditionHandler}>
          <Link
            to={{ pathname: "/product-list/computerEquipment" }}
            state={computerEquipments}
            className="hover:border-b-4 hover:border-orange-500 text-slate-200 px-6 py-3 flex justify-center items-center w-full bg-slate-900"
          >
            <IoCartSharp className="text-lg" />
            <span className="mr-1 text-lg w-max">محصولات</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
