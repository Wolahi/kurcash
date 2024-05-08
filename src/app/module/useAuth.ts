import { useEffect, useState } from "react";

const useAuth = (): {
  login: (authToken: string) => void;
  logout: () => void;
  isAuth: boolean;
} => {
  const [isAuth, setIsAuth] = useState(false);

  const login = (authToken: string) => {
    localStorage.setItem("token", JSON.stringify(authToken));
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
    }
  }, []);

  return {
    isAuth,
    login,
    logout,
  };
};

export default useAuth;
