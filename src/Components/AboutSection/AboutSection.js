const AboutSection = () => {
  return (
    <div className="mt-12">
      <div className="text-orange-500 border-b pb-7 border-slate-400 font-bold text-3xl lg:text-4xl">
        <h5>درباره ی کالامالا</h5>
      </div>
      <div>
        <h6 className="text-xl font-bold my-4 lg:text-2xl">
          کالامالا چگونه است ؟
        </h6>
        <p className="font-extrabold leading-8 text-justify lg:text-lg  lg:font-semibold">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <div className="mt-5 lg:mt-8">
          <ul className="list-disc list-inside">
            <li className="font-bold text-normal lg:text-lg my-0.5">
              تنوع محصولات
            </li>
            <li className="font-bold text-normal lg:text-lg my-0.5">
              ارسال سریع
            </li>
            <li className="font-bold text-normal lg:text-lg my-0.5">
              پشتیبانی 24 ساعته
            </li>
            <li className="font-bold text-normal lg:text-lg my-0.5">
              رهگیری سفارشات
            </li>
          </ul>
        </div>
        <button className="bg-orange-500 text-white hover:bg-rose-800 transition duration-300 rounded-md py-2 px-5 mt-5 font-bold">
          تماس با ما
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
