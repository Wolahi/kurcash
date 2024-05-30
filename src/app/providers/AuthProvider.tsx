import useAuth from "../module/useAuth.ts";
import React, { PropsWithChildren } from "react";
import { AuthContext } from "../context/AuthContext.ts";

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { isAuth, token, logout, login } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
