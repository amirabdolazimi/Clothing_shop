import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const { totalItems } = useSelector((state) => state.cart);
  console.log(totalItems);

  return (
    <header className="bg-slate-900 flex justify-between px-4 items-center py-4">
      <Navbar />
      <Link to="shopping-cart">
        <button className="text-md border-2 relative p-2 hover:bg-orange-500 transition duration-300 ease-in-out text-slate-100 border-orange-500 font-semibold">
          <span>مشاهده سبد خرید</span>
          <span className="absolute px-2 bg-orange-600 text-md rounded-full text-white bottom-7">
            {totalItems}
          </span>
        </button>
      </Link>
      <h1 className="text-3xl select-none text-orange-500 font-semibold lg:text-4xl">
        (: کالامالا
      </h1>
    </header>
  );
};

export default Header;
