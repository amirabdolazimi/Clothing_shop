import { useDispatch, useSelector } from "react-redux";
import { IoCartSharp } from "react-icons/io5";
import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";
import {
  decrementQuantity,
  incrementQuantity,
  removeProductFromCart,
} from "../../../Features/Cart/CartSlice";
import { Fragment } from "react";
const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const { cartProducts, totalItems, totalPrice } = useSelector(
    (state) => state.cart
  );
  console.log(cartProducts, totalItems, totalPrice);
  return (
    <div className="px-12 py-4">
      {/* empty shopping-cart  section*/}
      {cartProducts.length === 0 && (
        <div className="flex select-none brightness-200 justify-center font-medium items-center text-3xl py-10 text-slate-700 opacity-40">
          <h2 className="ml-2">سبد خرید شما خالی است !</h2>
          <IoCartSharp className="text-5xl rotate-45" />
        </div>
      )}
      {/* cartProducts section */}
      <div>
        {cartProducts.map((p) => (
          <div
            key={p.id}
            className="px-5 py-4 my-8 border-2 border-red-150 shadow rounded-xl"
          >
            <div className="w-full items-center justify-center flex">
              <img
                className="w-fit h-72 mb-4"
                src={p.image}
                alt={`${p.category} product`}
              />
            </div>
            <div className=" flex flex-col text-xl font-bold mb-3">
              {p.title}
            </div>
            <div className=" flex justify-between text-xl mt-0.5 font-medium ">
              $ {p.price}
            </div>
            <div className="flex items-center justify-between mt-5 text-white">
              <div className="flex items-center">
                <button
                  onClick={() => dispatch(incrementQuantity(p.id))}
                  className="active:bg-yellow-600 py-2 text-2xl font-bold border-r-2 border-y-2 px-3 rounded-s-3xl border-amber-600 bg-yellow-500"
                >
                  <BiPlus />
                </button>
                <label className="py-1 text-2xl font-semibold px-3 border-y-2 border-amber-600 bg-yellow-500">
                  {p.quantity}
                </label>
                <button
                  disabled={p.quantity === 1 && true}
                  onClick={() => dispatch(decrementQuantity(p.id))}
                  className={`${
                    p.quantity !== 1 && "active:bg-yellow-600  opacity-100"
                  } py-2 disabled:cursor-not-allowed text-2xl opacity-70 border-l-2  border-y-2 font-bold px-3 rounded-e-3xl border-amber-600 bg-yellow-500`}
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
        <Fragment>
          <div className="flex justify-between items-center text-xl my-8">
            <span className="font-semibold text-2xl">قیمت کل :</span>
            <span>{totalPrice} $ </span>
          </div>
          <div>
            <button className="w-full flex items-center justify-center py-2 bg-orange-500 font-semibold text-xl rounded-lg text-white">
              نهایی کردن خرید
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ShoppingCartPage;