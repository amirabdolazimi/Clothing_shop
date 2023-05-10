import { useDispatch, useSelector } from "react-redux";
import { checkInCart } from "../../utils/checkInCart";
import { addProductToCart } from "../../Features/Cart/CartSlice";
import { Link } from "react-router-dom";
const Product = (product) => {
  const { price, title, image, description } = product;
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="px-7 py-3 my-5 flex flex-col w-3/4 justify-center shadow-lg border-2 rounded-lg border-slate-100">
      <div className="w-full items-center justify-center flex">
        <img className="w-fit py-2 h-80 mb-4" src={image} alt="productImage" />
      </div>
      <div className="text-2xl font-semibold mb-2">نام محصول: </div>
      <div className="text-left flex flex-col text-xl font-semibold mb-3">
        <span>{title}</span>
      </div>
      <div className="text-xl my-2">درباره محصول : </div>
      <div className="text-left text-medium font-normal">
        <p className="text-left leading-7">{description}</p>
      </div>
      {/* conditional rendering */}
      <div className="mt-8 flex justify-between items-center">
        <button
          // className="text-white px-10 bg-orange-500 rounded-lg py-2"
          className={`text-white px-10 rounded-lg py-2 ${
            !checkInCart(cartProducts, product)
              ? "bg-orange-500"
              : "bg-rose-600"
          }`}
          onClick={() => dispatch(addProductToCart(product))}
        >
          {!checkInCart(cartProducts, product) ? (
            "افزودن به سبد"
          ) : (
            <Link to="/shopping-cart">مشاهده سبد</Link>
          )}
        </button>
        <div className="text-left flex justify-between text-xl mt-0.5 font-medium ">
          <span>{price} $</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
