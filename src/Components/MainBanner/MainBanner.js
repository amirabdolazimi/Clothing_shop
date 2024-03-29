import styles from "./MainBanner.module.css";
const MainBanner = () => {
  return (
    <main className={`px-12 text-center py-24 ${styles.MainBanner}`}>
      <h3 className="text-xl lg:text-3xl text-orange-500 font-bold">
        کالامالا
      </h3>
      <h2 className="text-2xl lg:text-4xl mt-3 text-white font-semibold">
        به روز ترین مرجع برای خرید های اینترنتی
      </h2>
    </main>
  );
};

export default MainBanner;
