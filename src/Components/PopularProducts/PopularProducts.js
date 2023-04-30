import Product from "../Product/Product";

const PopularProducts = () => {
  return (
    <div className="px-12 py-7">
      <div className="justify-between flex flex-col border-b-2 pb-7 border-slate-400 mb-8">
        <h4 className="mb-4 text-2xl font-bold">محبوب ترین محصولات</h4>
        <h5 className="font-semibold text-xl text-orange-500">
          مشاهده همه محصولات
        </h5>
      </div>
      <div className="items-center justify-center flex flex-col">
        <Product />
        <br />
        <br />
        <br />
        <Product />
        <br />
        <br />
        <br />

        <Product />
      </div>
    </div>
  );
};

export default PopularProducts;
