import { $api } from "./api.ts";
import useAuth from "../module/useAuth.ts";

const useInterceptors = () => {
  const { token } = useAuth();

  $api.interceptors.request.use(function (config): any {
    if (token) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${String(token)}`,
        },
      };
    }
    return config;
  });
};

export default useInterceptors;
