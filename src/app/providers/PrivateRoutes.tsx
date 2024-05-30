import { useAuthContext } from "../context/useAuthContext.ts";
import { Route, Routes } from "react-router-dom";
import { useMemo } from "react";
import { routes } from "../config/routes.tsx";
import useInterceptors from "../api/useInterceptors.ts";

const PrivateRoutes = () => {
  const { isAuth } = useAuthContext();
  useInterceptors();
  const rotesPrivate = useMemo(() => {
    if (isAuth) {
      return routes;
    }
    return routes.filter((route) => !route.isPrivate);
  }, [isAuth]);

  return (
    <Routes>
      {rotesPrivate.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default PrivateRoutes;
