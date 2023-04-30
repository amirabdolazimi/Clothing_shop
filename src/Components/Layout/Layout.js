import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainBanner from "../MainBanner/MainBanner";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <MainBanner />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
