import { useMemo } from "react";
import { $api } from "./api.ts";

const useInterceptors = () => {
  const token = useMemo(
    () => String(localStorage.getItem("token")),
    [localStorage],
  );

  $api.interceptors.request.use(function (config): any {
    if (token) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: String(token),
        },
      };
    }
    return config;
  });
};

export default useInterceptors;
