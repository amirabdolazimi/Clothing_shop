import { useState } from "react";
import img from "../../data/img/jewlries/1.jpg";
import { BiPlus, BiTrash, BiMinus } from "react-icons/bi";
const Product = () => {
  const [productQuantity, setProductQuantity] = useState(0);

  const quantityHandler = (value) => {
    setProductQuantity((prevState) => prevState + value);
  };
  return (
    <div className="px-7 py-3 flex flex-col w-3/4 justify-center shadow-lg border-2 rounded-lg border-slate-100">
      <div className="w-full ">
        <img className="w-full" src={img} alt="productImage" />
      </div>
      <div className="text-2xl font-semibold mb-3">انشگتر اسپرت</div>
      <div className="text-lg mb-3 font-medium "> 100000 تومان</div>
      <div className="text-medium font-normal">
        <p className="leading-7 text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است.
        </p>
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
