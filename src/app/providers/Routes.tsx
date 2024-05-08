import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../config/routes.tsx";
import useAuth from "../module/useAuth.ts";
import { useMemo } from "react";

const PrivateRoute = () => {
  const { isAuth } = useAuth();

  const rotesPrivate = useMemo(() => {
    if (isAuth) {
      return routes;
    }
    return routes.filter((route) => !route.isPrivate);
  }, [isAuth]);

  return (
    <BrowserRouter>
      <Routes>
        {rotesPrivate.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoute;
