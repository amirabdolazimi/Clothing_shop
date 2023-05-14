import { useDispatch, useSelector } from "react-redux";
import { checkInCart } from "../../utils/checkInCart";
import { addProductToCart } from "../../Features/Cart/CartSlice";
import { Link } from "react-router-dom";
const Product = (product) => {
  const { price, title, image, description } = product;
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="px-6 py-3 my-5 grid w-5/6 shadow-lg lg:shadow-xl border-2 rounded-lg border-slate-100 lg:w-10/12 lg:mx-4">
      <div className="w-full items-center justify-center flex">
        <img className="w-fit py-2 h-80 mb-4" src={image} alt="productImage" />
      </div>
      <div>
        <p className="text-xl font-bold mb-2">نام محصول: </p>
        <div className="text-left flex flex-col text-lg font-medium mb-3">
          <span>{title}</span>
        </div>
      </div>
      <div>
        <p className="text-lg my-2">درباره محصول : </p>
        <div className="text-left text-sm font-normal">
          <p className="text-left leading-7">{description}</p>
        </div>
      </div>
      {/* conditional rendering */}
      <div className="mt-8 flex justify-between items-end ">
        <button
          // className="text-white px-10 bg-orange-500 rounded-lg py-2"
          className={`text-white px-6 rounded-lg py-2 ${
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
        <div className="text-left justify-self-center text-lg font-medium">
          <span>{price} $</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
