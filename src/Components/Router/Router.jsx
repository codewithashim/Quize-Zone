import MainLayout from "../../Layout/MainLayout";
import NotFound from "../Error/NotFound";
import Home from "../Home/Home";
import Topic from "../Topic/Topic";
import Statistics from "../Statistics/Statistics";
import Blogs from "../Blogs/Blogs";
import { createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/topic",
        element: <Topic></Topic>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default route;
