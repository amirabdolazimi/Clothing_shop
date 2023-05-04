import { useState } from "react";
import { BiPlus, BiTrash, BiMinus } from "react-icons/bi";
const Product = ({ price, title, img, name }) => {
  const [productQuantity, setProductQuantity] = useState(0);

  const quantityHandler = (value) => {
    setProductQuantity((prevState) => prevState + value);
  };
  return (
    <div className="px-7 py-3 my-5 flex flex-col w-3/4 justify-center shadow-lg border-2 rounded-lg border-slate-100">
      <div className="w-full items-center justify-center flex">
        <img className="w-50 h-80 mb-4" src={img} alt="productImage" />
      </div>
      <div className="text-2xl font-semibold mb-2">نام محصول: </div>
      <div className="text-left flex flex-col text-xl font-semibold mb-3">
        <span>{name}</span>
      </div>
      <div className="text-left flex justify-between text-lg mb-3 font-medium ">
        <span>قیمت :</span>
        <span>{price} $</span>
      </div>
      <div className="text-xl my-2">درباره محصول : </div>
      <div className="text-left text-medium font-normal">
        <p className="text-left leading-7">{title}</p>
      </div>

      {/* conditional rendering */}
      <div className="mt-8">
        {productQuantity === 0 ? (
          <button
            className="w-full text-white bg-orange-500 rounded-lg py-2"
            onClick={() => quantityHandler(1)}
          >
            Add
          </button>
        ) : (
          <div className="flex justify-between items-center">
            <div className="font-semibold text-xl">مشاهده سبد</div>
            <div className="flex justify-center items-center">
              <button
                className="text-3xl rounded-lg border-2 border-green-600 text-green-500 font-semibold"
                onClick={() => quantityHandler(1)}
              >
                <BiPlus />
              </button>
              <label className="mx-5 text-2xl font-semibold">
                {productQuantity}
              </label>
              {productQuantity === 1 && (
                <button
                  className="text-3xl font-semibold text-red-500"
                  onClick={() => quantityHandler(-1)}
                >
                  <BiTrash />
                </button>
              )}
              {productQuantity > 1 && (
                <button
                  className="text-3xl rounded-lg border-2 text-red-500 border-red-600 text-red-500 "
                  onClick={() => quantityHandler(-1)}
                >
                  <BiMinus />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
