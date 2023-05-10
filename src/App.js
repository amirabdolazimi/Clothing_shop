import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import ProductListPage from "./Components/Pages/ProductListPage/ProductListPage";
import ProductCategoryPage from "./Components/Pages/ProductCategoryPage/ProductCategoryPage";
import PopularProductsPage from "./Components/Pages/PopularProductPage/PopularProductsPage";
import ShoppingCartPage from "./Components/Pages/ShoppingCartPage/ShoppingCartPage";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PopularProductsPage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="/product-list" element={<ProductListPage />}>
          <Route
            path="/product-list/:category"
            element={<ProductCategoryPage />}
          />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
