import { RiCopyrightLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="px-4 py-8 bg-orange-500 text-white flex items-center">
      <div>
        تمامی حقوق این وبسایت متعلق به
        <span className="font-medium">{"( امیر عبدالعظیمی )"}</span> است
      </div>
      <div className="mr-0.5 mt-0.5 font-bold text-lg">
        <RiCopyrightLine />
      </div>
    </div>
  );
};

export default Footer;
