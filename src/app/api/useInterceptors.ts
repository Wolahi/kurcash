import { $api } from "./api.ts";
import { useAuthContext } from "../context/useAuthContext.ts";
import { useEffect } from "react";

const useInterceptors = () => {
  const { token } = useAuthContext();
  console.log(token);
  useEffect(() => {
    $api.interceptors.request.use(function (config): any {
      if (token) {
        return {
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          },
        };
      }
      return config;
    });
  }, [token]);
};

export default useInterceptors;
