import {
    createBrowserRouter,
  } from "react-router-dom";

  import App from "../../App";
import PreviewUI from "../uis/Preview";
  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/preview",
            element: <PreviewUI />,
        }
      ]
    },
    // {
    //     path: "/preview",
    //     element: <PreviewUI />,
    // }
]);