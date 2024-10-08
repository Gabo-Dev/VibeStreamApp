import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App.jsx";
import Lyrics from "./routes/Lyrics.jsx";
import ErrorPage from "./routes/error-page.jsx";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const basename = "/VibeStreamApp";
const router = createBrowserRouter(
  [
    {
      path: "/",
      // Root Route, the rest of our routes will be render inside of it
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "Lyrics",
          element: <Lyrics />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ],
  {
    basename,
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
