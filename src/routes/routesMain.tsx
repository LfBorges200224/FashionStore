import { Route, Routes, useLocation } from "react-router-dom";
import { DashboardHome } from "../pages/DashboardHome";
import { DashboardProducts } from "../pages/DashboardProducts";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { ProductPage } from "../pages/ProductPage";
import { Register } from "../pages/Register";
import { useContext, useEffect } from "react";
import { ProductContext } from "../providers/ProductContext";
import { PublicRoutes } from "./publicRoutes/PublicRoutes";
import { ProtectedRoutes } from "./protectedRoutes/ProtectedRoutes";

export const RoutesMain = () => {
  const { products, cartModal } = useContext(ProductContext);

  const location = useLocation();

  useEffect(() => {
    if (cartModal.current !== null) cartModal.current.checked = false;
    window.scroll(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/" element={<Home />} />
          {products.map((product) => (
            <Route
              key={product.id}
              path={`product/${product.id}`}
              element={<ProductPage product={product} />}
            />
          ))}
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="dashboard/home" element={<DashboardHome />} />
          <Route path="dashboard/products" element={<DashboardProducts />} />
        </Route>
      </Routes>
    </>
  );
};
