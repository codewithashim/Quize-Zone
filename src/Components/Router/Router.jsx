import MainLayout from "../../Layout/MainLayout";
import NotFound from "../Error/NotFound";
import Home from "../Home/Home";
import Topic from "../Topic/Topic";
import Statistics from "../Statistics/Statistics";
import Blogs from "../Blogs/Blogs";
import { createBrowserRouter } from "react-router-dom";
import Quize from "../Quize/Quize";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/topic",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Topic></Topic>,
      },
      {
        path: "/quize/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
        element: <Quize></Quize>,
      },
      {
        path: "/statistics",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
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
