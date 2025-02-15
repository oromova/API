import { createBrowserRouter } from "react-router-dom";
import { Login } from "./Login";
import { App } from "./App";
import { Categories } from "./Login/Categories";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/categories",
    element: <Categories />
  }
]);