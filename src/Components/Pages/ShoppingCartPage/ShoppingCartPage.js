import { useDispatch, useSelector } from "react-redux";
import { IoCartSharp } from "react-icons/io5";
import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";
import {
  decrementQuantity,
  incrementQuantity,
  removeProductFromCart,
} from "../../../Features/Cart/CartSlice";
const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const { cartProducts, totalItems, totalPrice } = useSelector(
    (state) => state.cart
  );
  console.log(cartProducts, totalItems, totalPrice);
  return (
    <div className="px-4 py-4">
      {/* empty shopping-cart  section*/}
      {cartProducts.length === 0 && (
        <div className="flex select-none brightness-200 justify-center font-medium items-center text-2xl py-10 text-slate-700 opacity-40 lg:text-4xl">
          <h2 className="ml-2">سبد خرید شما خالی است !</h2>
          <IoCartSharp className="text-4xl rotate-45" />
        </div>
      )}
      {/* cartProducts section */}
      <div className="justify-items-center  px-4 grid grid-cols-1 md:grid-cols-2 md:justify-between lg:grid-cols-3 lg:gap-cols-1">
        {cartProducts.map((p) => (
          <div
            key={p.id}
            className="px-6 py-3 my-5 grid  w-5/6 shadow-lg lg:shadow-xl border-2 rounded-lg border-slate-100 lg:w-10/12 lg:mx-4"
          >
            <div className="w-full items-center justify-center flex">
              <img
                className="w-fit h-72 mb-4"
                src={p.image}
                alt={`${p.category} product`}
              />
            </div>
            <div className=" flex flex-col text-lg font-semibold mb-3">
              {p.title}
            </div>
            <div className=" flex justify-between text-lg mt-0.5 font-medium ">
              $ {p.price}
            </div>
            <div className="flex items-center justify-between mt-5 text-white">
              <div className="flex items-center">
                <button
                  onClick={() => dispatch(incrementQuantity(p.id))}
                  className="active:bg-yellow-600 py-2 text-xl font-bold border-r-2 border-y-2 px-3 rounded-s-3xl border-amber-600 bg-yellow-500"
                >
                  <BiPlus />
                </button>
                <label className="py-1 text-xl font-semibold px-3 border-y-2 border-amber-600 bg-yellow-500">
                  {p.quantity}
                </label>
                <button
                  disabled={p.quantity === 1 && true}
                  onClick={() => dispatch(decrementQuantity(p.id))}
                  className={`${
                    p.quantity === 1 && "active:bg-yellow-500 opacity-50 "
                  } py-2 disabled:cursor-not-allowed text-xl active:bg-yellow-600 border-l-2 border-y-2 font-bold px-3 rounded-e-3xl border-amber-600 bg-yellow-500`}
                >
                  <BiMinus />
                </button>
              </div>
              <div>
                <button
                  onClick={() =>
                    dispatch(
                      removeProductFromCart({ id: p.id, quantity: p.quantity })
                    )
                  }
                  className="py-1.5 text-3xl font-bold px-3 text-red-600"
                >
                  <BiTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cartProducts.length !== 0 && (
        <div className="w-full lg:flex lg:justify-between lg:items-center">
          <div className="flex justify-between items-center text-xl my-8">
            <span className="font-semibold text-xl lg:text-2xl">قیمت کل :</span>
            <span className="text-lg lg:text-xl lg:text-semibold lg:mr-6">
              {totalPrice} $
            </span>
          </div>
          <div className="lg:w-2/6 lg:justify-self-end">
            <button className="w-full   flex items-center justify-center py-2 bg-orange-500 active:bg-red-600 font-semibold text-lg rounded-lg text-white">
              نهایی کردن خرید
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;
