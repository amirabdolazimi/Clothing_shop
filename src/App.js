import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Features/store";
import Layout from "./Components/Layout/Layout";
// import PopularProducts from "./Components/PopularProducts/PopularProducts";
import ProductListPage from "./Components/Pages/ProductListPage/ProductListPage";
import ProductCategoryPage from "./Components/Pages/ProductCategoryPage/ProductCategoryPage";
function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/product-list" element={<ProductListPage />}>
            {/* <Route
              path="/product-list/jewlries"
              element={<ProductCategoryPage />}
            />
            <Route
              path="/product-list/womenDress"
              element={<ProductCategoryPage />}
            />
            <Route
              path="/product-list/manDress"
              element={<ProductCategoryPage />}
            />
            <Route
              path="/product-list/computerEquipments"
              element={<ProductCategoryPage />}
            /> */}
            <Route
              path="/product-list/:category"
              element={<ProductCategoryPage />}
            />
          </Route>
          {/* <PopularProducts /> */}
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
