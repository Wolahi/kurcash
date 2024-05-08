import useAuth from "../../../app/module/useAuth.ts";
import { Navigate } from "react-router";

const NotFound = () => {
  const { isAuth } = useAuth();
  return (
    <div>{isAuth ? "такого нема мужичок" : <Navigate to={"/login"} />}</div>
  );
};

export default NotFound;
