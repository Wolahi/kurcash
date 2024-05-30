import { Navigate } from "react-router";
import { useAuthContext } from "../../../app/context/useAuthContext.ts";

const NotFound = () => {
  const { isAuth } = useAuthContext();
  return (
    <div>{isAuth ? "такого нема мужичок" : <Navigate to={"/login"} />}</div>
  );
};

export default NotFound;
