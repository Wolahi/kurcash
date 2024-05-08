import { IRoutesItem } from "./interfaces/IRoutesItem.ts";
import Login from "../../pages/Login/ui/Login.tsx";
import Registration from "../../pages/Registration/ui/Registration.tsx";
import MainPage from "../../pages/MainPage/ui/MainPage.tsx";
import Test from "../../pages/Test/ui/Test.tsx";
import TestResult from "../../pages/TestResult/ui/TestResult.tsx";
import NotFound from "../../pages/NotFound/ui/NotFound.tsx";

export const routes: IRoutesItem[] = [
  {
    path: "/",
    element: <MainPage />,
    isPrivate: false,
  },
  {
    path: "/login",
    element: <Login />,
    isPrivate: false,
  },
  {
    path: "/reg",
    element: <Registration />,
    isPrivate: false,
  },
  {
    path: "/test/:id",
    element: <Test />,
    isPrivate: true,
  },
  {
    path: "/test-result",
    element: <TestResult />,
    isPrivate: true,
  },
  {
    path: "*",
    element: <NotFound />,
    isPrivate: false,
  },
];
