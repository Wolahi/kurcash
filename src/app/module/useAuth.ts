import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const useAuth = (): {
  login: (authToken: string) => void;
  logout: () => void;
  isAuth: boolean;
  token: string | null;
} => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const location = useLocation();

  const login = (authToken: string) => {
    localStorage.setItem("token", authToken);
    setToken(authToken);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsAuth(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
      setToken(String(localStorage.getItem("token")));
    }
  }, [location.pathname]);

  return {
    isAuth,
    token,
    login,
    logout,
  };
};

export default useAuth;
