import { ConfigProvider } from "antd";
import { theme } from "../config/theme.ts";
import { GlobalStyles } from "../styles/GlobalStyles.ts";
import PrivateRoute from "../providers/Routes.tsx";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <GlobalStyles />
      <PrivateRoute />
    </ConfigProvider>
  );
}

export default App;
