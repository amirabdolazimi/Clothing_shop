import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Features/store";
import Layout from "./Components/Layout/Layout";
import ProductListPage from "./Components/Pages/ProductListPage/ProductListPage";
import ProductCategoryPage from "./Components/Pages/ProductCategoryPage/ProductCategoryPage";
import PopularProductsPage from "./Components/Pages/PopularProductPage/PopularProductsPage";
function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<PopularProductsPage />} />
          <Route path="/product-list" element={<ProductListPage />}>
            <Route
              path="/product-list/:category"
              element={<ProductCategoryPage />}
            />
          </Route>
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
