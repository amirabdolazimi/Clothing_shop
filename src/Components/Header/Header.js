import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="bg-slate-900 flex justify-between px-12 items-center py-4">
      <Navbar />
      <button className="text-lg border-2 px-2 hover:bg-orange-500 py-2 transition duration-300 ease-in-out text-slate-100 border-orange-500 font-semibold">
        <span>مشاهده سبد خرید</span>
      </button>
      <h1 className="text-4xl text-orange-500 font-semibold">(: کالامالا</h1>
    </header>
  );
};

export default Header;
