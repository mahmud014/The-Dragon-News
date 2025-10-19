import { createBrowserRouter } from "react-router";
import Root from "../Roots/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import ErrorPage from "../Components/ErrorPage";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Roots/AuthLayout";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/career",
        Component: Career,
      },
      {
        path: "category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: LoginPage,
      },
      {
        path: "/auth/register",
        Component: RegisterPage,
      },
    ],
  },
]);
