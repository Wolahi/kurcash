import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./AuthProvider.tsx";
import PrivateRoutes from "./PrivateRoutes.tsx";

const PrivateRoute = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PrivateRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default PrivateRoute;
