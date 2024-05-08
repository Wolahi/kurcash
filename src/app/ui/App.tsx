import { ConfigProvider } from "antd";
import { theme } from "../config/theme.ts";
import { GlobalStyles } from "../styles/GlobalStyles.ts";
import PrivateRoute from "../providers/Routes.tsx";
import useInterceptors from "../api/useInterceptors.ts";

function App() {
  useInterceptors();
  return (
    <ConfigProvider theme={theme}>
      <GlobalStyles />
      <PrivateRoute />
    </ConfigProvider>
  );
}

export default App;
