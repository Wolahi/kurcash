import { useContext } from "react";
import { AuthContext } from "./AuthContext.ts";

export const useAuthContext = () => useContext(AuthContext);
