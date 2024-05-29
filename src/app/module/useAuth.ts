import { useEffect, useState } from "react";

const useAuth = (): {
  login: (authToken: string) => void;
  logout: () => void;
  isAuth: boolean;
  token: string;
} => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState<string>("");

  const login = (authToken: string) => {
    localStorage.setItem("token", authToken);
    setToken(authToken);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
      setToken(String(localStorage.getItem("token")));
    }
  }, []);

  return {
    isAuth,
    token,
    login,
    logout,
  };
};

export default useAuth;
