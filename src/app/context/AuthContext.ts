import { createContext } from "react";

export const AuthContext = createContext<{
  isAuth: boolean;
  token: string | null;
  login?: (token: string) => void;
  logout?: () => void;
}>({
  isAuth: false,
  token: null,
});
