import { useState } from "react";
import { IoCall, IoCartSharp, IoHome } from "react-icons/io5";
const Header = () => {
  const [menuCondition, setMenuCondition] = useState(true);
  return (
    <header className="bg-slate-900 flex justify-between px-12 items-center py-4">
      <div className="flex flex-col justify-center items-center relative">
        <div
          className="flex flex-col cursor-pointer "
          onClick={() => setMenuCondition((prevState) => !prevState)}
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
          <div>
            <a
              href="#/"
              className="hover:border-b-4 hover:border-orange-500 text-slate-200 px-6 py-3 flex justify-center items-center w-full bg-slate-900"
            >
              <IoHome className="text-lg" />
              <span className="mr-1 text-lg w-max">خانه</span>
            </a>
          </div>
          <div>
            <a
              href="#/"
              className="hover:border-b-4 hover:border-orange-500 text-slate-200 px-6 py-3 flex justify-center items-center w-full bg-slate-900"
            >
              <IoCall className="text-lg" />
              <span className="mr-1 text-lg w-max">تماس با ما</span>
            </a>
          </div>
          <div>
            <a
              href="#/"
              className="hover:border-b-4 hover:border-orange-500 text-slate-200 px-6 py-3 flex justify-center items-center w-full bg-slate-900"
            >
              <IoCartSharp className="text-lg" />
              <span className="mr-1 text-lg w-max">محصولات</span>
            </a>
          </div>
        </div>
      </div>
      <button className="text-lg border-2 px-2 hover:bg-orange-500 py-2 transition duration-300 ease-in-out text-slate-100 border-orange-500 font-semibold">
        <span>مشاهده سبد خرید</span>
      </button>
      <h1 className="text-4xl text-orange-500 font-semibold">(: کالامالا</h1>
    </header>
  );
};

export default Header;
