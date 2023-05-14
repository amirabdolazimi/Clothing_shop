import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAsyncProducts } from "../../Features/Products/ProductSlice";
import { IoCall, IoCartSharp, IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSplitProducts } from "../../utils/useSplitProducts";

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
    <div className="flex flex-col justify-center items-center relative lg:static ">
      <div
        className="flex flex-col cursor-pointer lg:hidden"
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
        style={{ right: "-16px" }}
        className={`text-center content-center absolute top-12 z-50 lg:flex lg:flex-row lg:block lg:static ${
          menuCondition ? "sm:hidden" : "sm:block"
        }`}
      >
        <div onClick={menuConditionHandler} className="lg:mx-3">
          <Link
            to="/"
            className="hover:border-b-4 hover:border-orange-500 text-slate-200 px-6 py-3 lg:py-2 flex justify-center items-center w-full bg-slate-900 lg:hover:border-2 lg:hover:bg-orange-600  lg:border-2 lg:rounded-tr-3xl  lg:rounded-bl-3xl lg:border-orange-600 lg:transition lg:ease-in-out"
          >
            <IoHome className="text-lg" />
            <span className="mr-1 text-md w-max">خانه</span>
          </Link>
        </div>
        <div onClick={menuConditionHandler} className="lg:mx-3">
          <Link
            to="*"
            className="hover:border-b-4 hover:border-orange-500 text-slate-200 px-6 py-3 lg:py-2 flex justify-center items-center w-full bg-slate-900 lg:hover:border-2 lg:hover:bg-orange-600  lg:border-2 lg:rounded-tr-3xl  lg:rounded-bl-3xl lg:border-orange-600 lg:transition lg:ease-in-out"
          >
            <IoCall className="text-lg" />
            <span className="mr-1 text-md w-max">تماس با ما</span>
          </Link>
        </div>
        <div onClick={menuConditionHandler} className="lg:mx-3">
          <Link
            to={{ pathname: "/product-list/computerEquipment" }}
            state={computerEquipments}
            className="hover:border-b-4 hover:border-orange-500 text-slate-200 px-6 py-3 lg:py-2 flex justify-center items-center w-full bg-slate-900 lg:hover:border-2 lg:hover:bg-orange-600  lg:border-2 lg:rounded-tr-3xl  lg:rounded-bl-3xl lg:border-orange-600 lg:transition lg:ease-in-out"
          >
            <IoCartSharp className="text-lg" />
            <span className="mr-1 text-md w-max">محصولات</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
