import { TbError404 } from "react-icons/tb";
const NotFound = () => {
  return (
    <div className="flex select-none brightness-200 justify-center font-medium items-center text-2xl py-10 text-slate-700 opacity-40">
      <h2 className="ml-2">صفحه مورد نظر یافت نشد !</h2>
      <TbError404 className="text-4xl rotate-12" />
    </div>
  );
};

export default NotFound;
