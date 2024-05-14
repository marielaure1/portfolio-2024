import { createBrowserRouter } from "react-router-dom";
import App from "@/App.jsx";
import Home from "@/pages/Home.jsx";
import ThreeJS from "@/pages/ThreeJS.jsx";
import Legacy from "@/pages/Legacy.jsx";
import Test from "@/pages/Test.jsx";

const router = createBrowserRouter([
    {
      path: "",
      element: <App/>,
      children: [
        {
          path: "/",
          index: true,
          element: <Home/>,
          // loader: <Loader/>,
        },
        {
          path: "/mentions-legales",
          element: <Legacy/>,
        },
        {
          path: "/test",
          element: <Test/>,
        }
      ]
    },
    // {
    //   path: "/experience",
    //   element: <ThreeJS/>,
    // }
]);

export default router;