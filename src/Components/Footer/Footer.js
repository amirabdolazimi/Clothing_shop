import { RiCopyrightLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="px-12 justify-center py-8 bg-orange-500 text-white flex items-center">
      <div>
        تمامی حقوق این وبسایت متعلق به{" "}
        <span className="font-semibold">{"( امیر عبدالعظیمی )"}</span> است
      </div>
      <div className="mr-0.5 mt-0.5 font-bold text-xl">
        <RiCopyrightLine />
      </div>
    </div>
  );
};

export default Footer;
